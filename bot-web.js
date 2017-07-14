var Bot = function(id) {this.id=id;};
Bot.prototype.sendMessage = function(chat_id, text) {
  var xhr = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
    if(!"withCredentials" in xhr)
      reject();
    xhr.onload = function() {
      resolve(JSON.parse(xhr.responseText));
    }
    xhr.open("https://api.telegram.org/bot" + this.id + "/sendMessage?chat_id=" + chat_id + "&text=" + text);
  });
};
