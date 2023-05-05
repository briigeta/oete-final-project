class AddUserIdToPoems < ActiveRecord::Migration[7.0]
  def change
    add_column :poems, :user_id, :bigint, null: false, default: 0
    add_foreign_key :poems, :users
  end
end
