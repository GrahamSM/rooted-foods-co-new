class Order < ActiveRecord::Base
  belongs_to :user
  has_many :bundles
  has_many :products
  has_many :order_items
  has_many :products, through: :order_items
end
