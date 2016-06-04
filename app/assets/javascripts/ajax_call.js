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
