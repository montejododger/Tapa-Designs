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
    
end
