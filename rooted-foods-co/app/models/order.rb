class Order < ActiveRecord::Base
  belongs_to :user
  belongs_to :sale
  has_many :order_items
  has_many :bundles, through: :order_items
  has_many :products, through: :order_items


# TODO: Clean up these methods

  def update_products(options)
    quantity = options[:quantity]
    is_bundle = options[:is_bundle]
    if (is_bundle)
      bundle = Bundle.find(options[:id])
      bundle_products = bundle.products
      bundle_products.each do |product|
        add_product(product, quantity)
      end
      order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
      order_item.quantity = quantity
      order_item.bundle = bundle
      order_item.save
    else
      product = Product.find(options[:id])
      add_product(product, quantity)
    end
  end
end

def add_product(product, quantity)
  order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
  if (order_item)
    order_item.quantity += quantity
    order_item.save
  else
    self.products << product
  end
end
