json.cart_item do
    json.extract! @cart_item, :id, :product_id, :quantity, :options
end