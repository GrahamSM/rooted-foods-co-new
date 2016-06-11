class Product < ActiveRecord::Base
  has_many :bundles
  belongs_to :category
end
