var CurrentUser = function(cookies){
  var _that = this;

  var _cookies = cookies;
  var _currentUser = null;

  _that.set = function(user){
    _cookies.setJsonCookie('currentUser', user);
    _currentUser = user;
  };
  _that.get = function() {
    if(!_currentUser){
      _currentUser = _cookies.getJsonCookie('currentUser');
    }
    return _currentUser;
  };
  _that.clear = function(){
    _cookies.deleteCookie('currentUser');
    _currentUser = null;
  };
  _that.getAuthorizationToken = function(){
    var currentUser = _that.get();
    if(currentUser){
      return currentUser['attributes']['auth-token'];
    }
    return null;
  };

  return _that;
}(Cookies);
