module Authentication
  def current_user
    @current_user ||= User.find_by(auth_token: request.headers['Authorization'])
  end

  def authenticate
    render(json: { errors: "Not authenticated" }, status: :unauthorized) unless current_user.present?
  end

  def does_user_id_match_to_current_user_id(user_id)
    ids_match = current_user.id == user_id.to_i()
    render(json: { errors: "Not authenticated" }, status: :unauthorized) unless ids_match
    return ids_match
  end
end
