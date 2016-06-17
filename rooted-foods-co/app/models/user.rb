class User < ActiveRecord::Base
  has_many :orders
  has_secure_password
  has_one :api_key, dependent: :destroy
  after_create :generate_api_key

  def update_order_status_to_complete
    current_order = get_current_order
    current_order.completed = true
    Sale.create!(order_id: current_order.id, paid: true, refunded: false)
    binding.pry
  end

  def get_current_order
    return orders.where(active: true, completed: false).first
  end

  protected

  def generate_api_key
    self.create_api_key
  end
end
