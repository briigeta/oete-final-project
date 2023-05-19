class CreatePoemPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :poem_posts do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
