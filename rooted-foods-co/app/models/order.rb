class Order < ActiveRecord::Base
  belongs_to :user
  has_many :order_items
  has_many :bundles, through: :order_items
  has_many :products, through: :order_items


  def update_products(options)
    bundle = Bundle.find(options[:id])
    bundle_products = bundle.products
    bundle_products.each do |product|
      order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
      if (order_item)
        order_item.quantity += options[:quantity]
        order_item.save
      else
        self.products << product
        order_item = OrderItem.where(order_id: self.id, product_id: product.id).first
        order_item.quantity = options[:quantity]
        order_item.bundle = bundle
        order_item.save
      end
    end
  end
end
