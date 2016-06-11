class UserController < ApplicationController

  def new
    @order = Order.new
  end

  def create
    binding.pry
    @order = Order.new(order_params)
  end

  def update
  end

  def edit
  end

  protected

  def order_params
    # params.require(:user).permit(:first_name, :last_name, :shipping_address, :billing_address)
  end

end
