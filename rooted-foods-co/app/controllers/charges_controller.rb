class ChargesController < ApplicationController

  def new
  end

  def create
    customer = Stripe::Customer.create(
      email: params[:stripeEmail],
      source: params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      customer: customer.id,
      amount: @amount,
      description: 'Rails Stripe customer',
      currency: 'cad'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    refirect_to new_charge_path
  end

end


# Step 1: Get a stripe token for the credit card (CLIENT) from the client side, and make a request to my API with the returned token
# Step 2: Submit form to my server with the token
# Step 3: Create Stripe customer with the token, and store the return token in to the user model
# Step 4: charge = Stripe::Charge...
