class UsersController < ApplicationController

  skip_before_action :ensure_authenticated_user, :only => [:create]

  def new
    @user = User.new
    render nothing: true
  end

  def create
    if current_user
      render json: {errors: "You are currently logged in!"}, status: 401
    else
      @user = User.create(user_params)
      if @user.save
        render json: @user.to_json(:include => [:api_key])
      else
        render json: {errors: @user.errors.messages}, status: 422
      end
    end
  end

  def update

  end

  def edit

  end

  protected

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :username)
  end



end
