import React from "react"

const ReviewBody = ({review}) => {


    return (
        <div>
            <p>{review.title}</p>
            <p>{review.body}</p>
            <p>{review.title}</p>
        </div>
    )
}

export default ReviewBody

// #  id         :bigint       
// #  title      :string  
// #  body       :string  
// #  rating     :integer
// #  user_id    :bigint  
// #  product_id :bigint  
// #  created_at :datetime
// #  updated_at :datetime