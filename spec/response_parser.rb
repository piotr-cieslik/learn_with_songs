module ResponseParser
  def get_response_body_as_json
    JSON.parse(response.body, symbolize_names: true)
  end
end
