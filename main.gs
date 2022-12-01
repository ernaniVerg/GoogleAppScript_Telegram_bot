// Copy and paste this code into the google app scripts

var botKey = "TOKEN"; //Insert 
var script_url = "URL_Script";
var telegram_url = "https://api.telegram.org/bot"+botKey;

//Configure webhook mode for Telegram bot's
function config(){
  
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
  let response = UrlFetchApp.fetch(telegram_url+"/setWebhook",options1);
  }catch(err){ 
         Logger.log(err.message)
              }  
}

function msg(m){

  var headers = {
        'Content-Type': 'application/json',
        };
  var payload1 = {
          "chat_id": m.id,
          "text": m.tx,
        }  
  var options1 = {
        method: "POST",
        headers: headers,
        payload: JSON.stringify(payload1) 
        }

  try{
        let response = UrlFetchApp.fetch(telegram_url+"/sendMessage", options1);
  }catch(err){ 
         Logger.log(err.message)
              }   
}

function doPost(e) {

  var contents = JSON.parse(e.postData.contents);
  var user_id = contents.message.from.id;
  var ms = contents.message.text;

  switch(ms){  
  // insert commands in cases and
      case '/start' :
        var menssage = "Hello World"
        msg({id : user_id,tx : menssage});
      break;

  }
}
