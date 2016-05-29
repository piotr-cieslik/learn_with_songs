class Api::UsersController < ApplicationController
  respond_to(:json)
  before_action(:authenticate, except: [:create])

  def show
    does_user_id_match_to_current_user_id(params[:id]) or return
    respond_with(current_user())
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
    does_user_id_match_to_current_user_id(params[:id]) or return

    user = current_user()
    if user.update(user_params)
      render(json: user, status: :ok, location: [:api, user])
    else
      render(json: { errors: user.errors }, status: :unprocessable_entity)
    end
  end

  def destroy
    does_user_id_match_to_current_user_id(params[:id]) or return

    user = current_user()
    user.destroy
    head :no_content
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
