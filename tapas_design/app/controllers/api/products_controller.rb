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
    end


    # TODO: comment these puts out

    # def search
    #     # this calls the search method in the model
    #     @products = Product.search(params[:query])
    #     # puts "Search Query: #{params[:query]}" # Add this line to debug the query
    #     # puts "Search Results: #{@products.inspect}" # Add this line to debug the search results
    #     render :search
    # end

    def search
        @products = Product.search(params[:query])
        render :search
    end

    def category
        @products = Product.by_category(params[:category])
        render :category
    end
end
