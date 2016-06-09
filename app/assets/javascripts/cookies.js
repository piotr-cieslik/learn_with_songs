var cookies = {
  set: function(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
  },
  setJson: function(name, value){
    var stringifyValue = JSON.stringify(value);
    this.set(name, stringifyValue);
  },
  get: function(name) {
    var cookieName = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length,c.length);
        }
    }
    return null;
  },
  getJson: function(name){
    var value = this.get(name);
    if(!value){
      return null;
    }

    return JSON.parse(value);
  },
  delete: function(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }
}
