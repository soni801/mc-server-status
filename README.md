# mc-server-status

Discord bot for seeing the status of a Minecraft server

### Setup

Run `yarn` or `yarn install` to install the dependencies of this project. You can then run `yarn start` or
`yarn run start` to start the bot.

---

### Configuration

Configuration for the bot is set in `config.json`. A config file is already shipped with the default settings, but the
bot will not run unless some values are changed:

**Bot token**

This is the token used by the software to connect to Discord's API. If you don't already have a bot with a token, make
one in the [Discord developer dashboard](https://discord.com/developers/applications). Enter your token in the `token`
field in the config file.

**Minecraft server**

The Minecraft server to ping for data. Put the server URL in the `mc.server` field in the config file.

**Guild**

The ID of the Discord guild (server) to use. With developer mode enabled, right-click the guild and hit 'Copy ID'. Put
this in the `guild` field in the config file.

**Channels**

Which channels to use for status display. With developer mode enabled, right-click the channels and hit 'Copy ID'. Put
the channel to display online status in the `channels.status` field, and the channel to display player count in the
`channels.playerCount` field in the config file. It is recommended to use audio channels.

### Optional configuration

**Bot status**

The bots playing status in Discord. Put this in the `botStatus` field in the config file. Leave empty for no status.

**API**

The API to query for server data. Put this in the `mc.api` field in the config file. _Do not change this unless you know
what you are doing_. Default: `https://api.mcsrvstat.us/2/`

**Ping interval**

Amount of time to wait between each query of the API, in milliseconds. Put this in the `mc.interval` field in the config
file. Default: `60000`

**Channel naming**

How the channels are named in Discord. `naming.status.prefix` and `naming.playerCount.prefix` is the prefix to use for
the status and player count channels respectively. `naming.status.online` and `naming.status.offline` is the text to use
in the status channel when the server is online of offline.
