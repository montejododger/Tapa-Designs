Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      #  this allows the user to see their reviews on their profile
      resources :reviews, only: [:index]
    end

    resource :session, only: [:show, :create, :destroy]

    resources :products, only: [:index, :show] do
      collection do
        get 'search'
        get 'cart_items'
        get 'categories/:category', action: :category, as: 'category'
      end

      # allows a product to show its reviews and create update and delete
      resources :reviews, only: [:index, :create, :update, :destroy]
    end

    resources :cart_items, only: [:index, :create, :update, :destroy] do

      #custom route for deleting the entire cart api/cart_items/clear
      delete 'clear', on: :collection, to: 'cart_items#clear'
    end

  end

end
