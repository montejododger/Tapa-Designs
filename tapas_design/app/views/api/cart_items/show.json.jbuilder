json.cart_item do
    json.extract! @cart_item, :id, :product_id, :quantity, :options, :user_id
    product = @cart_item.product
    json.product_price product.price
    json.product_photos url_for(product.photos.first)
end


