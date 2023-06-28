
@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :user_id, :product_id, :quantity, :options
    end
end


# this will create a object with the cart_item Id as the key
# 