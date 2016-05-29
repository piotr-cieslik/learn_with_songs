class Api::UsersController < ApplicationController
  respond_to(:json)
  before_action(:authenticate!, only: [:show])

  def show
    if current_user.id != params[:id].to_i()
      render(json: nil, status: :unauthorized)
      return
    end

    respond_with(User.find(params[:id]))
  end

  def create
    user = User.new(user_params)
    if user.save
      render(json: user, status: :created, location: [:api, user])
    else
      render(json: { errors: user.errors }, status: :unprocessable_entity)
    end
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render(json: user, status: :ok, location: [:api, user])
    else
      render(json: { errors: user.errors }, status: :unprocessable_entity)
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
