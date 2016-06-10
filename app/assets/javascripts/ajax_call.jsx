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

var ajaxCall = {
  get: function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'GET',
      contentType: "application/json",
      headers:{
        'Authorization': this.getAuthorizationToken()
      },
      success: function(data){
        parameters.success(data);
      },
      error: function(xhr, status, err){
        parameters.error(xhr, status, error);
      }
    });
  },
  post: function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: parameters.data,
      headers:{
        'Authorization': this.getAuthorizationToken()
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        parameters.error(xhr, status, error);
      }
    });
  },
  delete: function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'DELETE',
      contentType: "application/json",
      headers:{
        'Authorization': this.getAuthorizationToken()
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        parameters.error(xhr, status, error);
      }
    });
  },
  getAuthorizationToken: function(){
    var user = applicationStore.getState().user;
    var authorizationToken = user && user['attributes']['auth-token'];
    return authorizationToken;
  }
};
