class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
  has_one_attached :image
  has_one_attached :banner_image
end
