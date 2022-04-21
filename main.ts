import { Client, Intents } from 'discord.js';
import config from './config.json';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Run when the client is ready
client.once('ready', () => console.log('Ready!'));

// Login to Discord with the client's token
client.login(config.token).then(() => console.log("Logged in!"));
