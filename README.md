<img src="https://www.gdgalgiers.com/static/gdg_algiers-86a26a90b5a8da9cdd3127750215f051.png" alt="GDG LOGO" >
<br>

# Description

TemplateJs is an open source discord.js based bot template that will help you build a Discord bot in a quick and elegant way. It's easy-to-use and simple-to-setup Command handler for Discord bots, You just have to tweak few settings, add your commands, and you will be ready to go!

## Requirements
* ```git``` command line ([Windows](https://git-scm.com/download/win) | [Linux](https://git-scm.com/download/linux) | [MacOS](https://git-scm.com/download/mac)) installed
* ```node``` [Version 16.x](https://nodejs.org/en/) or newer
* [guild id](https://poshbot.readthedocs.io/en/latest/guides/backends/setup-discord-backend/#find-your-guild-id-server-id) of the server, [the client id and the token](https://poshbot.readthedocs.io/en/latest/guides/backends/setup-discord-backend/#prerequisites) of the bot

## How to use it ?

* Make sure that the '[applications.commands](https://discord.com/developers/applications/)' scope is checked in the scopes section of the OAuth2 settings for your bot

* Clone this repo 
 ```git
 git clone https://github.com/GDGAlgiers/discord.js-bot-template
  ```
* Put the token and the client id of your bot, the guild id of your discord server, into the config.js file 

 ```
 {
	"clientId": "your client id",
	"guildId": "your guild id",
	"token": "your bot's token"
}
  ```
* Install the dependencies
```npm
npm install 
  ```
* Run the bot.js file 
```node
node src/bot.js 
  ```
  
## Warning
> :warning: Be careful, hide your config.json file from pushing your bot and server informations !
