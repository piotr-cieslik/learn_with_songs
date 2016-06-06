$(document).ajaxStart(function () {
  $.blockUI({
    message: "<img src='assets/indicator.gif'></img>",
    css: {
      padding:        0,
      margin:         0,
      width:          '20%',
      top:            '40%',
      left:           '40%',
      textAlign:      'center',
      color:          '#000',
      border:         null,
      backgroundColor: null,
      cursor:         'wait'
    },
    theme: false,
    overlayCSS:{
      backgroundColor: "#fff",
      opacity: 0.5,
      cursor: "wait"
    }
  });
});

$(document).ajaxStop(function () {
  $.unblockUI();
});

var AjaxCall = function(currentUser){
  _that = this;
  _currentUser = currentUser;

  _that.post = function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: parameters.data,
      headers:{
        'Authorization': _currentUser.getAuthorizationToken()
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        parameters.error(xhr, status, error);
      }
    });
  };
  _that.delete = function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'DELETE',
      contentType: "application/json",
      headers:{
        'Authorization': _currentUser.getAuthorizationToken()
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        parameters.error(xhr, status, error);
      }
    });
  };

  return _that;
}(CurrentUser);
