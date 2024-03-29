# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :string           not null
#  rating     :integer          not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#   Each review belongs to a user and product
#   Validates certain columns to ensure data integrity when saving to DB
class Review < ApplicationRecord
    belongs_to :product
    belongs_to :user

    validates :body, presence: true
    validates :title, presence: true
    validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
