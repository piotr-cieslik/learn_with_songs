class Api::SessionsController < ApplicationController
  def create
    user_password = params[:data][:attributes][:password]
    user_email = params[:data][:attributes][:email]
    user = user_email.present? && User.find_by(email: user_email)

    if user.authenticate(user_password)
      user.generate_auth_token!()
      user.save()
      render(json: user, status: :ok, location: [:api, user])
    else
      render(json: { errors: "Invalid email or password" }, status: :unprocessable_entity)
    end
  end

  def destroy
    user = User.find_by(auth_token: params[:id])
    user.generate_auth_token!()
    user.save!()
    head(:no_content)
  end
end
