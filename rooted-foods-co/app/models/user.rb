class User < ActiveRecord::Base
  has_many :orders
  has_secure_password
  has_one :api_key, dependent: :destroy
  after_create :generate_api_key

  protected

  def generate_api_key
    self.create_api_key
  end
end
