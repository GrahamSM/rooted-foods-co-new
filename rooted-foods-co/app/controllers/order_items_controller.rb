class OrderItemsController < ApplicationController

  def index
    order = current_user.orders.where(active: true, completed: false).first
    if (order)
      order_items = order.order_items
      render json: order_items.to_json(:include => [:product])
    else
      render json: {}, status: 200
    end
  end

  def destroy
    current_order = current_user.get_current_order
    order_item = current_order.order_items.where(product_id: [params[:id]]).first
    order_item.destroy!
    render json: {}, status: 200
  end
end
