class OrdersController < ApplicationController

  def new
    @order = Order.new
  end

  def create
    @current_order = current_user.orders.where(active: true)
    if !(@current_order.empty?)
      @products = Bundle.find(params[:id]).products
      @products.each do |product|
        @current_order.products << product
      end
      if @current_order.save
        render json: {}, status: 200
      else
        render json: {errors: @current_order.errors.messages}, status: 422
      end
    else
      @products = Bundle.find(params[:id]).products
      @current_order = Order.create(order_params)
      @current_order.user = current_user
      @current_order.active = true;
      @products.each do |product|
        @current_order.products << product
      end
      if @current_order.save
        render json: {}, status: 200
      else
        render json: {errors: @current_order.errors.messages}, status: 422
      end
    end
  end

  def update
  end

  def edit
  end

  protected

  def order_params
    params.require(:order).permit(:recurring, :active, :shipping_address, :billing_address)
  end

end
