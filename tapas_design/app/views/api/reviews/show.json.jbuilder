
# This will create a nested review object with a review object inside it 
# nested under a review object
json.review do
    json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id
end


# non nested
# json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id