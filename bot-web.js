var BotWeb = {};
BotWeb.Bot = function(id) {this.id=id;}
BotWeb.Bot.sendMessage = function(chat_id, text) {
  var xhr = new XMLHttpRequest();
  var promise = new Promise(function(resolve, reject) {
    if(!"withCredentials" in xhr)
      reject();
    xhr.onload = function() {
      resolve(JSON.parse(xhr.responseText));
    }
    xhr.open("https://api.telegram.org/bot" + this.id + "/sendMessage?chat_id=" + chat_id + "&text=" + text);
  });
}
