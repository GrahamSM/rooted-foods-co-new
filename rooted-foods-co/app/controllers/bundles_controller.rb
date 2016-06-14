class BundlesController < ApplicationController

    skip_before_filter :ensure_authenticated_user

    def index
    end

    def top_four
      @bundles = Bundle.first(4)
      binding.pry
      respond_to do |format|
         format.html
         format.json { render :json => @bundles.to_json(:include => :products)}
      end
    end

    def show
    end

    def new
      @bundle = Bundle.new
    end

    def create
      @bundle = Bundle.new(bundle_params)
      @bundle.set_price
      binding.pry
    end

    protected

    def bundle_params
      params.require(:bundle).permit(:description, :image)
    end

end
