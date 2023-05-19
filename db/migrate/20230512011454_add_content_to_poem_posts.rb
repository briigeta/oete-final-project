class AddContentToPoemPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :poem_posts, :content, :text
  end
end
