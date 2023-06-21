json.product do
    json.extract! @product, :id, :name, :description, :price, :category, :size, :color
end

# TODO: Reviews section / and photos setting?