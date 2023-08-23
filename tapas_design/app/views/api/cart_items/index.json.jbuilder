
@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :user_id, :product_id, :quantity, :options
        product = cart_item.product
        json.product_name product.name
        json.product_price product.price
        json.photo product.photos.first&.url
    end
end


