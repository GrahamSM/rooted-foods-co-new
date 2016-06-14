class ProductBundle < ActiveRecord::Base
  belongs_to :product
  belongs_to :bundle
end
