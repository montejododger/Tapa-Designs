    json.extract! @product, :id, :name, :description, :price, :category, :size, :color
    json.photos @product.photos.map { |photo|  url_for(photo.url) }
