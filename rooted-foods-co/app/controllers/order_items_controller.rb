class OrderItemsController < ApplicationController

  def index
    @order = current_user.orders.where(active: true, completed: false).first
    @order_items = OrderItem.where(order_id: @order.id)
    render json: @order_items.to_json(:include => [:product])
  end
end
