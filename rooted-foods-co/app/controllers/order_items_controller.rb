class OrderItemsController < ApplicationController

  def index
    order = current_user.orders.where(active: true, completed: false).first
    order_items = order.order_items
    render json: order_items.to_json(:include => [:product])
  end
end
