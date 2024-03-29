class Api::ReviewsController < ApplicationController

    # before being able to use certain methods we check if the user is logged in
    before_action :require_logged_in, only: [:create, :update, :destroy]

    # action methods, which are in routes
    # allows for finding a product by either product or user ID
    #//! user_id is for future user profile use
    def index
        if params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])
        elsif params[:user_id]
            @reviews = Review.where(user_id: params[:user_id])
        end

        render :index
    end

    # Create a new review with params
    # set user_id to current_user
    # set product_id to params product_id
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        @review.product_id = params[:product_id]

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    # find review by current user
    # #product is used to render the proudct show page with updated review
    # after updating review render the product show page which reviews is nested under
    def update
        @review = current_user.reviews.find(params[:id])
        @product = Product.find_by(id: params[:product_id])

        if @review.update(review_params)
            render '/api/products/show'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end


    def destroy
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        render :show
    end

    # Help prevent mass assignment vulnerabilities by permitting certain params only
    private

    def review_params
        params.require(:review).permit(:title, :body, :rating, :product_id)
    end

end
