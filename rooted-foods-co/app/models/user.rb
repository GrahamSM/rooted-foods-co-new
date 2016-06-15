class User < ActiveRecord::Base
  has_many :orders
  has_secure_password
  has_one :api_key, dependent: :destroy
  after_create :generate_api_key
  validates_format_of :email, :with => /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
  validates_form_of :phone, :with => /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

  protected

  def generate_api_key
    self.create_api_key
  end
end
