class Product < ActiveRecord::Base
  has_many :product_bundles
  has_many :bundles, through: :product_bundles
  belongs_to :category

  has_many :order_items
  has_many :orders, through: :order_items

end
