class OrdersController < ApplicationController

  def new
    @order = Order.new
  end

  def create
    @current_order = current_user.orders.where(active: true)
    if !(@current_order.empty?)
      @products = Bundle.find(params[:id]).products
      @products.each do |product|
        @current_order.products << products
      end
      if @current_order.save
        #RENDER JSON
      else
        #RENDER ERROR JSON
      end
    else
      @products = Bundle.find(params[:id]).products
      @order = Order.create(order_params)
      @order.user = current_user
      @order.active = true;
      @products.each do |product|
        @order.products << product
      end
      if @order.save
        # send back json
      else
        # send back error
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
