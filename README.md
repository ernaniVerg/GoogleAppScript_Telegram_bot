## AppScript_Telegram_bot
---
#####Descripition: A simple and free telegram chat bot service with google script
---
### Required:
>**Google** account 
>**Telegram** account
###Create a Bot on Telegram

1. In your Telegram account, access <https://telegram.me/BotFather> in browser or mobile, and send a menssage to **start a chat**.

2. In chat send a menssage _/newbot_.

3. Choose a **name** for your bot, and send a menssage.

4. Choose a username for your bot. It must **end** in **_bot_**  (example: _"USERNAME_bot"_) and send a menssage.

5. **Copy and save** the **_TOKEN_** generated in the sent message.

6. Acess link for **_new chat_** of the new bot created in the sent message <https://t.me/USERNAME_bot">.

7. Send a menssage **_/start_** to start a chat with the newer bot created.


### Google Scripts configuration

2. Access: <https://script.google.com/home/> and choose a **_new project_**.

3. In **_Files_** create a new blank **_Script_**.

3. Copy and paste the code in main.gs and save the project.

4. In **_Implant_** button, choose **_new deployment_**.

5. Select the _type_ **_web app_**, insert an description

1. In *__run__* as" choose option "_Me(your_account@gmail.com)_"

1. In *__who can access__* choose option *__Anyone__*

1. Press button *__Authorize access__*, choose your account and press link **_Advanced_** and the option _Go to PROJECT_NAME (unsafe)_. Press the **_allow_** button

1. Press the button *_implant_* copy and save the 'URL' generated.

1. In script replace (in ..quotes) the term _URL_Script_ with the **_URL_** generated in the previous step.

1. In script replace (in quotes) the term _TOKEN_ with the **TOKEN** generated in previous step.

1. Choose a fuction "config" and press "Run" button.
### Test and modify

1. In the chat with the created Bot, type /start and send.

1. Check if it returned "Hello World".

1. In the "doPost(e)" function inside the "switch" loop, you can create new "cases" by changing the value "/start" to a command starting with "/" (eg:/command1) and the value of the variable "message " insert the response text for this command.
  
  
  




