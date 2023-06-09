class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token
  
  validates :username,
  uniqueness: true,
  length: { in: 3..30 },
  format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

  validates :email,
    uniqueness: true,
    length: { in: 3..255 },
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :session_token, presence: true, uniqueness: true

  validates :password, length: { in: 6..255 }, allow_nil: true

  def self.find_by_credentials(email, password)
    # field = credential.match(URI::MailTo::EMAIL_REGEXP) ? :email 
    user = User.find_by_email(email)
    user && user.authenticate(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    while true
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end


end

