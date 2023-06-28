class Api::CartItemsController < ApplicationController

  before_action :require_logged_in, only: [:create, :update, :destory]


  # grabs the items that belong to the current user

  def index
    # debugger
    @cart_items = CartItem.where(user_id: current_user.id)
    render :index
  end


  # will never use this route

  # def show
  #   @cart_item = CartItem.find(params[:id])
  #   render :show
  # end

  # what the servers response should be

  def create
    @cart_item = CartItem.new(cart_item_params)
    @cart_item.user_id = current_user.id
    # @cart_item.quantity = 1

    @cart_items = CartItem.where(user_id: current_user.id)
    if @cart_item.save
      render :index
      
    else
      render json: @cart_item.errors.full_messages, status: 422
    end

  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])

    if @cart_item.update(cart_item_params)
      @cart_items = CartItem.where(user_id: current_user.id)
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

  private

  def cart_item_params
    params.require(:cart_item).permit(:id, :product_id, :quantity, :options)
  end

end
