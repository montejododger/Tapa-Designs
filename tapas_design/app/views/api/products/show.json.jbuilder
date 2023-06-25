    json.product do
        json.extract! @product, :id, :name, :description, :price, :category, :size, :color
        json.photos @product.photos.map { |photo|  url_for(photo.url) }
    end

    json.reviews do
         @product.reviews.each do |review|
            json.set! review.id do
                json.extract! review, :title, :body, :rating, :user_id, :product_id
                json.author review.user.first_name # TODO: might need to take this out
            end
        end
    end
