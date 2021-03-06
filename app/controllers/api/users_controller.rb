class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render :show
    else
      render json: ['User not found'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
