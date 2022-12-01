// Configure webhook mode for Telegram bot's

function config(token,url_script){

  var botKey = token;
  var script_url = url_script;
  var telegram_url = "https://api.telegram.org/bot"+botKey+"/setWebhook";

  var headers = {
        'Content-Type': 'application/json',
        };
  var payload1 = {
        "url": script_url,
       } 
  var options1 = {
        method: "POST",
        headers: headers,
        payload: JSON.stringify(payload1) 
        }

  try{
  let response = UrlFetchApp.fetch(telegram_url,options1);
  }catch(err){ 
         Logger.log(err.message)
              }  
}
