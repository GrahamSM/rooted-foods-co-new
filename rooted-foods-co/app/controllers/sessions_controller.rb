class SessionsController < ApplicationController
 # creating a session doesn't require you to have an access token
 skip_before_action :ensure_authenticated_user, :only => [:create]

 def create
   user = User.where(username: params[:username_or_email]).first || User.where(email: params[:username_or_email]).first
   if user && user.authenticate(params[:password])
   @api_key = user.api_key
   @api_key.last_access = Time.now
     if !@api_key.access_token || @api_key.is_expired?
       puts "non existent or expired key, generating"
       @api_key.set_expiry_date
       @api_key.generate_access_token
     end
     @api_key.save
     if (user.shipping_address)
       has_payment_info = true
     else
       has_payment_info = false
     end
     render json: {api_key: @api_key, has_payment_info: has_payment_info}, status: 201
   else
     render json: { errors: 'Could not authenticate properly.' }, status: 401
   end
 end

 # Clearing user key when they log out
 def destroy
   api_key = ApiKey.where(access_token: params[:_json]).first
   api_key.access_token = ''
   api_key.expires_at = Time.now
   if api_key.save
     render json: {}, status: 200
   else
     render json: {}, status: 422
   end
 end
end
