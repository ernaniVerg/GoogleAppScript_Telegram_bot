# AppScript_Telegram_bot

Descripition: A simple and free telegram chat bot service with google script

# Required:
  A. Google account\
  B. Telegram account\

# 1. Create a Bot on Telegram

  1.1 - In your Telegram account, access https://telegram.me/BotFather in browser or mobile, and send a menssage to start a chat.\
  1.2 - In chat send a menssage /newbot.\
  1.3 - Choose a name for your bot, and send a menssage.\
  1.4 - Choose a username for your bot. It must end in `bot`(example: "USERNAME_bot") and send a menssage.\
  1.5 - Copy and save the 'TOKEN' generated in the sent message.\
  1.6 - Acess link for new chat of the new bot created in the sent message (t.me/"USERNAME_bot").\
  1.7 - Send a menssage /start to start a chat with the newer bot created.\

# 2. Google Scripts configuration

  2.1 - Access https://script.google.com/home/ and choose a new project.\
  2.2 - In "Files" create a new blank "Script".\
  2.3 - Copy and paste the code in main.gs and save the project.\
  2.4 - In "Implant" button, choose "new deployment".\
  2.5 - Select the type "web app", insert an description
  2.6 - In "run as" choose option "Me(your_account@gmail.com)"
  2.7 - In "who can access" choose option "Anyone"
  2.8 - Press button "Authorize access", choose your account and press link "Advanced" and the option "Go to PROJECT_NAME (unsafe)". Press the "allow" button
  2.8 - Press the button "implant" copy and save the 'URL' generated.\
  2.9 - In script replace (in quotes) the term "URL_Script" with the 'URL' generated in the previous step.\
  2.10 - In script replace (in quotes) the term "TOKEN" with the 'TOKEN' generated in 1.5 step.\
  2.11 - Choose a fuction "config" and press "Run" button.\
  
# 3. Test and modify

  3.1 - In the chat with the created Bot, type /start and send.\
  3.2 - Check if it returned "Hello World".\
  3.3 - In the "doPost(e)" function inside the "switch" loop, you can create new "cases" by changing the value "/start" to a command starting with "/" (eg:/command1) and the value of the variable "message " insert the response text for this command.\
  
  
  




