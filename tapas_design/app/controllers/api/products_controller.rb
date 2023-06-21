class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    # TODO: make a search method
end
