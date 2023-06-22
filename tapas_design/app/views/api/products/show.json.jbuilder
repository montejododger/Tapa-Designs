json.product do
    json.extract! @product, :id, :name, :description, :price, :category, :size, :color
    json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end

# TODO: Reviews section / and photos setting?