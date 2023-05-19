class AddPoemPostReferenceToComments < ActiveRecord::Migration[7.0]
  def change
    add_reference :comments, :poem_post, foreign_key: true
  end
end
