class Bundle < ActiveRecord::Base
  has_many :orders
  has_many :product_bundles
  has_many :products, through: :product_bundles


  def set_price
    self.price = 0
    products.each do |product|
      self.price += product.price
    end
  end

end
