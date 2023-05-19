class Comment < ApplicationRecord
  belongs_to :poem_post
  belongs_to :user
end
