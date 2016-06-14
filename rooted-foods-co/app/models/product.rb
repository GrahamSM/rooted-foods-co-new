class Product < ActiveRecord::Base
  has_many :product_bundles
  has_many :bundles, through: :product_bundles
  belongs_to :category
end
