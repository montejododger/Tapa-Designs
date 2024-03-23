class Api::CartItemsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destory]
  # include Rails.application.routes.url_helpers


  # grabs the items that belong to the current user

  def index
    # debugger
    @cart_items = CartItem.where(user_id: current_user.id)
    render :index

  end


  def create
    # find the current users cart items and then checks the options so you can add different version of the same product
    @cart_item = CartItem.find_by(user_id: current_user.id, product_id: cart_item_params[:product_id], options: cart_item_params[:options])


    if @cart_item
      @cart_item.quantity += 1
      if @cart_item.save
        render :show
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
    else
      @cart_item = CartItem.new(cart_item_params)
      @cart_item.user_id = current_user.id
      if @cart_item.save
        render :show
      else
        render json: @cart_item.errors.full_messages, status: 422
      end
    end
  end


  def update
    @cart_item = CartItem.find_by(id: params[:id])

    if @cart_item.update(cart_item_params)
      @cart_items = CartItem.where(user_id: current_user.id)
      # render show because we dont need all the whole index back just the updated item
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end

  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    @cart_item.destroy
    render :show
  end

  def clear
    @cart_items = CartItem.where(user_id: current_user.id)

    if @cart_items.destroy_all
      render json: { message: 'Cart cleared successfully' }, status: :ok
    else
      render json: { error: 'Failed to clear the cart' }, status: :unprocessable_entity
    end
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:id, :product_id, :quantity, :options)
  end

end
