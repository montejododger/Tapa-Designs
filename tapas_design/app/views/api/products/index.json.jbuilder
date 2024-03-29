@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :price, :category, :size, :color
        json.photos product.photos.map { |photo|  photo.url }
    end 
end
