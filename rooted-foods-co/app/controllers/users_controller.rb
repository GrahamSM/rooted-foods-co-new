class UsersController < ApplicationController

  skip_before_action :ensure_authenticated_user, :only => [:create]

  def get_products
    if current_user
      @order = current_user.orders.where(active: true, completed: false).first
      render json: @order.to_json(:include => [:products])
    else
      render json: {errors: "You must be logged in!"}, status: 401
    end
  end

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
    user = current_user
    if (user)
      user.update!(user_params)
    end
    render json: {}, status: 200
  end

  def edit

  end

  protected

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :username, :phone, :shipping_address, :shipping_city, :shipping_province, :shipping_postal_code, :shipping_country, :billing_address, :billing_city, :billing_province, :billing_country, :billing_postal_code)
  end
end
