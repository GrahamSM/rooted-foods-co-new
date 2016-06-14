class Product < ApplicationController

    def index
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

end
