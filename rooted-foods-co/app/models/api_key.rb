class ApiKey < ActiveRecord::Base
  before_create :generate_access_token, :set_expiry_date

  belongs_to :user

  validates :user, presence: true

  def set_expiry_date
    self.expires_at = DateTime.now + 30.days
  end

  def generate_access_token
    begin
      self.access_token = SecureRandom.hex
    end while not_unique_token?
  end

  def is_expired?
    return self.expires_at <= Time.now ? true : false
  end

  def not_unique_token?
    self.class.where(access_token: access_token).exists?
  end
end
