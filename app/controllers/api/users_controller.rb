class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if @user.save
      login!(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end


  def show
    username = params[:id]
    @user = User.find_by('username' => username)

    if @user
      render 'api/users/show'
    else
      print @user
      render json: { errors: ["Invalid user profile"]}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  end

end
