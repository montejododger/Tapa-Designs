# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :float            not null
#  category    :string           not null
#  size        :string           not null
#  color       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord

    validates :name, :description, :category, presence: true
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :name, uniqueness: true

    has_many_attached :photos

    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review,
        dependent: :destroy
        
    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem,
        dependent: :destroy

    scope :search, -> (query) { where("LOWER(name) LIKE :query OR LOWER(description) LIKE :query OR LOWER(category) LIKE :query", query: "%#{query.downcase}%") }

    scope :by_category, -> (category) { where("LOWER(category) = ?", category.downcase) }

    
end
