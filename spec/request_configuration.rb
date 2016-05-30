module RequestConfiguration
  def set_request_accept_and_content_type_to_json
    request.headers['Content-Type'] = Mime::JSON.to_s
    request.headers["Accept"] = Mime::JSON.to_s
  end
end
