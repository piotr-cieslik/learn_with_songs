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

var ajaxCall = {
  post: function(parameters){
    var user = applicationStore.getState().user;
    var authorizationToken = user && user['attributes']['auth-token'];
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: parameters.data,
      headers:{
        'Authorization': authorizationToken
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
    var user = applicationStore.getState().user;
    var authorizationToken = user && user['attributes']['auth-token'];
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'DELETE',
      contentType: "application/json",
      headers:{
        'Authorization': authorizationToken
      },
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        parameters.error(xhr, status, error);
      }
    });
  }
};
