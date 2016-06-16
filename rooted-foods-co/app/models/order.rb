class Order < ActiveRecord::Base
  belongs_to :user
  has_many :order_items
  has_many :bundles, through: :order_items
  has_many :products, through: :order_items
end
