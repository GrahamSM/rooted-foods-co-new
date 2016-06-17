class SalesController < ApplicationController

  def new
    sale = Sale.new
  end

  def create
    sale = Sale.create(sale_params)
  end


  protected

  def sale_params
    params.require(:sale).permit(:amount, :paid, :refunded)
  end

end
