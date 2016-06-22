class Order < ActiveRecord::Base
  belongs_to :user
  belongs_to :sale
  has_many :order_items
  has_many :bundles, through: :order_items
  has_many :products, through: :order_items


# TODO: Clean up these methods
  def update_products(options)
    quantity = options[:quantity]
    binding.pry
    is_bundle = options[:is_bundle]
    if (is_bundle)
      bundle = Bundle.find(options[:id])
      bundle.products.each do |product|
        add_bundle_product(product, quantity, bundle)
      end
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
    order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
    order_item.quantity = quantity
    order_item.save
  end
end

def add_bundle_product(product, quantity, bundle)
  order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
  if (order_item)
    order_item.quantity += quantity
    order_item.save
  else
    self.products << product
    order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
    order_item.quantity = quantity
    order_item.bundle = bundle
    order_item.save
  end
end
