class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :comments, dependent: :destroy
  has_many :poem_posts, dependent: :destroy
  has_one_attached :image
  has_one_attached :banner_image



  def destroy_associated_poem_posts
    poem_posts.destroy_all
  end

  def user_params
    params.require(:user).permit(:username)
  end

end
