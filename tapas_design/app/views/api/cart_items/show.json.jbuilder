json.cart_item do
    json.extract! @cart_item, :id, :product_id, :quantity, :options, :user_id
end

# TODO: DO I MAP THE FIRST PHOTO TO THE

