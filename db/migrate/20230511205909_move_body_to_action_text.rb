class MoveBodyToActionText < ActiveRecord::Migration[7.0]
  def change
    PoemPost.all.find_each do |poem_post|
      poem_post.update(content: poem_post.body)
    end

    remove_column :poem_posts, :body
  end
end
