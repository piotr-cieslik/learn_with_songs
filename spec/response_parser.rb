module ResponseParser
  def get_response_body_as_json
    JSON.parse(response.body, symbolize_names: true)
  end

  def get_response_attributes
    get_response_data()["attributes"]
  end

  def get_response_data
    JSON.parse(response.body)["data"]
  end

  def get_response_errors
    JSON.parse(response.body)["errors"]
  end
end
