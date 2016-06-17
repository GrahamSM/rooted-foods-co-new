class ProductsController < ApplicationController

  skip_before_filter :ensure_authenticated_user

  def index
    products = Product.all
    render json: products, status: 200
  end

  def show
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
  end

  protected

  def product_params
    params.require(:product).permit(:name, :description, :distributor, :SKU, :price)
  end

end
