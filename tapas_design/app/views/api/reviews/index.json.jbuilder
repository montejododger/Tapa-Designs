@reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :title, :body, :rating, :product_id, :user_id
    end
  end

#json.set! is setting the key to the id of review
#json.extract! for each review pull out each id title body rating prod_id user_id