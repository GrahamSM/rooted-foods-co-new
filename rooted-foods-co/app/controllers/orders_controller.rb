class OrdersController < ApplicationController

  def new
    order = Order.new
  end

  #THIS LOGIC IS FOR WHEN A USER ADDS A BUNDLE TO THEIR CART. TODO: Move to a subroute of bundles!
  def create
    current_order = current_user.orders.where(active: true, completed: false).first
    if (current_order) #an order is already in the process of being filled
      bundle = Bundle.find(params[:id])
      products = bundle.products
      products.each do |product|
        order_item = OrderItem.where(order_id: current_order.id, product_id: product.id).first
        if (order_item)
          order_item.quantity += params[:quantity]
          order_item.save
        else
          current_order.products << product #there is no order item for this products and this order, so make it and set the quantity!
          order_item = OrderItem.where(order_id: current_order.id, product_id: product.id).first
          order_item.quantity = params[:quantity]
          order_item.bundle = bundle
          order_item.save
        end
      end
      if current_order.save
        render json: {}, status: 200
      else
        render json: {errors: current_order.errors.messages}, status: 422
      end
    else #create a new order
      bundle = Bundle.find(params[:id])
      products = bundle.products
      current_order = Order.create(order_params)
      current_order.user = current_user
      current_order.active = true
      products.each do |product|
        current_order.products << product
        order_item = OrderItem.where(order_id: current_order.id, product_id: product.id).first
        order_item.quantity = params[:quantity]
        order_item.bundle = bundle
        order_item.save
      end
      if current_order.save
        render json: {}, status: 200
      else
        render json: {errors: current_order.errors.messages}, status: 422
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
