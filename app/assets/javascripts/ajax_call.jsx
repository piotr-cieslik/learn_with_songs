var busyIndicator =
'<div class="preloader-wrapper active">'+
  '<div class="spinner-layer spinner-red-only">' +
    '<div class="circle-clipper left">' +
      '<div class="circle"></div>' +
    '</div><div class="gap-patch">' +
      '<div class="circle"></div>' +
    '</div><div class="circle-clipper right">' +
      '<div class="circle"></div>'+
    '</div>' +
  '</div>' +
'</div>';

$(document).ajaxStart(function () {
  $.blockUI({
    message: busyIndicator,
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

var ajaxCall = function(){
  var that = this;

  var getAuthorizationToken = function(){
    var user = applicationStore.getState().user;
    var authorizationToken = user && user['attributes']['auth-token'];
    return authorizationToken;
  }

  var handleErrors = function(xhr, status, error, parameters){
    if(xhr.status == 401){
      cookies.delete('current_user');
      applicationStore.dispatch(Actions.logout());
      ReactRouter.browserHistory.push('/login');
      Materialize.toast('Przepraszamy, autoryzacja nie powiodła się. Zaloguj się ponownie.', 4000);
      return;
    }
    parameters.error(xhr, status, error);
  }

  that.get = function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'GET',
      contentType: "application/json",
      headers:{
        'Authorization': getAuthorizationToken()
      },
      success: function(data){
        parameters.success(data);
      },
      error: function(xhr, status, error){
        handleErrors(xhr, status, error, parameters);
      }
    });
  };

  that.post = function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: parameters.data,
      headers:{
        'Authorization': getAuthorizationToken()
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        handleErrors(xhr, status, error, parameters);
      }
    });
  };

  that.delete = function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'DELETE',
      contentType: "application/json",
      headers:{
        'Authorization': getAuthorizationToken()
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        handleErrors(xhr, status, error, parameters);
      }
    });
  };

  return that;
}();
