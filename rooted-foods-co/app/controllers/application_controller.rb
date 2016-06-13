class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  before_action :ensure_authenticated_user

  protected

  def ensure_authenticated_user
    head :unauthorized unless current_user
  end

  def ensure_admin_user
    head :unauthorized unless current_user.admin
  end

  def current_user
    api_key = ApiKey.find_by_access_token(token)
    if api_key && !api_key.is_expired?
      @current_user = api_key.user
    else
      return nil
    end
  end

  def token
    access_token = request.headers["X-ACCESS-TOKEN"]
    if access_token.present?
      access_token
    else
      nil
    end
  end
end
