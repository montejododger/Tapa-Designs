class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    def show

        @product = Product.find_by(id: params[:id])

        if @product 
            render :show 
        else
            render json: { errors: 'Listing not Found'}, status: 422
        end
        # render :show
    end

    # TODO: make a search method
end
