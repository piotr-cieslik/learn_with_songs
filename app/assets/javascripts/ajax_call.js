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

var AjaxCall = {
  post: function(parameters){
    $.ajax({
      url: parameters.url,
      dataType: 'json',
      type: 'POST',
      contentType: "application/json",
      data: parameters.data,
      success: function(data) {
        parameters.success(data);
      },
      error: function(xhr, status, error) {
        parameters.error(xhr, status, error);
      }
    });
  }
}
