// Configure webhook mode for Telegram bot's
function config(){

  var botKey = "BOTKEY";
  var script_url = "SCRIPT_URL";
  var telegram_url = "https://api.telegram.org/"+botKey+"/setWebhook";

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
