class PoemPost < ApplicationRecord
    validates :title, presence: true
    validates :content, presence: true, allow_blank: true
    belongs_to :user
 has_many :comments, dependent: :destroy
       
      
end
