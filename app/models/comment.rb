class Comment < ApplicationRecord
  belongs_to :poem
  belongs_to :user
  has_rich_text :body
end
