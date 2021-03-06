import { Client, Intents } from 'discord.js';
import config from './config.json';
import axios from 'axios';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Function for getting current time in logging format
function time(): string
{
    return `\x1b[2m[${new Date().toLocaleString()}]\x1b[0m`;
}

// Run when the client is ready
client.once('ready', () =>
{
    client.user!.setActivity(config.botStatus);
    console.log(`${time()} Ready!`);

    const statusChannel = client.guilds.cache.get(config.guild)!.channels.cache.get(config.channels.status)!;
    const playerChannel = client.guilds.cache.get(config.guild)!.channels.cache.get(config.channels.playerCount)!;

    setInterval(() =>
    {
        console.log(`${time()} Querying server data...`)
        axios.get(config.mc.api + config.mc.server).then(r =>
        {
            console.log(`${time()} Received data:\n\tOnline: ${r.data.online}\t Player count: ${r.data.players.online}`);

            statusChannel.edit({ name: config.naming.status.prefix +
                (r.data.online ? config.naming.status.online : config.naming.status.offline) });
            playerChannel.edit({ name: config.naming.playerCount.prefix + r.data.players.online });
        });
    }, config.mc.interval);
});

// Login to Discord with the client's token
client.login(config.token).then(() => console.log(`${time()} Logged in!`));
