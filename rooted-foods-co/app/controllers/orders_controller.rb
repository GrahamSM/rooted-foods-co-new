class OrdersController < ApplicationController

  def new
    order = Order.new
  end

  #THIS LOGIC IS FOR WHEN A USER ADDS A BUNDLE TO THEIR CART. TODO: Move to a subroute of bundles!
  def create
    current_order = current_user.orders.where(active: true, completed: false).first
    if (current_order)
      current_order.update_products(id: params[:id], quantity: params[:quantity], is_bundle: params[:is_bundle])
    else
      current_order = Order.create(order_params)
      current_order.user = current_user
      current_order.active = true
      current_order.update_products(id: params[:id], quantity: params[:quantity], is_bundle: params[:is_bundle])
    end
    if current_order.save
      render json: {}, status: 200
    else
      render json: {errors: current_order.errors.messages}, status: 422
    end
  end

  def edit
  end

  protected

  def order_params
    params.require(:order).permit(:recurring, :active, :shipping_address, :billing_address)
  end

end
