# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  quantity   :integer          not null
#  options    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord


    validates :user_id, :product_id, :quantity, :options, presence: true
    validates :quantity, numericality: { only_integer: true, greater_than: 0}

    
    belongs_to :user
    belongs_to :product

    
end
