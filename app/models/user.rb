class User < ApplicationRecord
  validates :username, :password_diggest, :session_token, :first_name,
            presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nill: true

  attr_reader :password

  after_initialize :ensure_session_token

  # has_many :activities
  #
  # has_many :routes,
  #          source: :route,
  #          foreign_key: :author_id
  #
  # has_many :comments,
  #          source: :comment,
  #          foreign_key: :commenter_id
  #
  # has_many :likes,
  #          source: :like,
  #          foreign_key: :liker_id
  #
  # has_many :follows,
  #          source: :follow,
  #          foreign_key: :follower_id
  #
  # has_many :followers,
  #          source: :follow,
  #          foreign_key: :followee_id
  #
  # has_one :image

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_diggest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_diggest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
