# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#
class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token

  validates :first_name, :last_name,
  length: { in: 2..25 },
  format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }

  validates :email,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :session_token, presence: true, uniqueness: true

  validates :password, length: { in: 6..255 }, allow_nil: true

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.authenticate(password) ? user : nil
  end

  
  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end
  
  private
  
  def generate_unique_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64
      return session_token unless User.exists?(session_token: session_token)
    end
  end
  
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end

