# G-i-s-Discord-Bot
Google Image Search bot for Discord

## INTRODUCTION: 
A Discord Bot which allows a Discord user to search for Google images through Discord.


## SETUP:
### Downloading this bot
You can clone this github page or download it as a .zip file and then extract it.

### Setting up your bot
1) Go to https://discord.com/developers/applications
2) Log in to your existing Discord account or create a new one.
3) Click on the “New Application” button.
4) Give the application a name and click “Create”.
5) Go to the “Bot” tab and then click “Add Bot”. You will have to confirm by clicking "Yes, do it!"
6) Your bot has been created. Now copy the token.
7) Navigate to the botconfig.json file and replace [INSERT TOKEN HERE] with the token you copied.
8) Save the botconfig.json file.

### Inviting your bot to your server
1) Go back to your discord application screen and click on your bot.
2) Go to the "OAuth2" tab . Then select "bot" under the "scopes" section.
3) Now choose the permissions you want for the bot. Administrator is recommended.
4) After selecting the appropriate permissions, click the 'copy' button above the permissions. 
That will copy a URL which can be used to add the bot to a server.
Paste the URL into your browser, choose a server to invite the bot to, and click “Authorize”.
To add the bot, your account needs "Manage Server" permissions.

### Starting your bot
1) Make sure you have node.js installed.
2) Open any kind of console (cmd/powershell).
3) Change your directory to the folder of your bot using the 'cd' command. (cd [PATH to your bot folder])
4) Launch the bot using 'node index.js', if everything went right, `[YOUR BOT NAME] is online!` should appear in the console.


## USAGE:
### Available commands:
#### !find [WORD] --> This will find a picture of the word of your choosing.

