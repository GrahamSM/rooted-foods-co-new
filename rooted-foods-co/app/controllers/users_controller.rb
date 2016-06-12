class UsersController < ApplicationController

  def new
    @user = User.new
    render nothing: true
  end

  def create
    binding.pry
    @user = User.new(user_params)
    render json: @user
  end

  def update

  end

  def edit

  end



  protected

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end

end
