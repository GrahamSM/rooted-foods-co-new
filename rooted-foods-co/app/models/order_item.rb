class OrderItem < ActiveRecord::Base
  belongs_to :order
  belongs_to :product
  validates_uniqueness_of :order_id, :scope => [:product_id] #Adjusted with quantity
end
