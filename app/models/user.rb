# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :first_name, :last_name,
            presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 , allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  # has_many :activities
  #
  has_many :routes,
           class_name: :Route,
           foreign_key: :author_id
  #
  # has_many :comments,
  #          class_name: :comment,
  #          foreign_key: :commenter_id
  #
  # has_many :likes,
  #          class_name: :like,
  #          foreign_key: :liker_id
  #
  # has_many :follows,
  #          class_name: :follow,
  #          foreign_key: :follower_id
  #
  # has_many :followers,
  #          class_name: :follow,
  #          foreign_key: :followee_id
  #
  # has_one :image

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
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
