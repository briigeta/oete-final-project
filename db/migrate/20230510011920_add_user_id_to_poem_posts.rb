class AddUserIdToPoemPosts < ActiveRecord::Migration[7.0]
  def change
    add_reference :poem_posts, :user, null: false, foreign_key: true, default: 0
  end
end
