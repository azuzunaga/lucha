class User < ApplicationRecord
  validates :username, :password_diggest, :session_token, :first_name,
            presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nill: true

  attr_reader :password

  after_initialize :ensure_session_token

  
end
