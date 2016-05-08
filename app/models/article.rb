class Article < ActiveRecord::Base
	#the validation below ensures that only titles with a min length of 5 chars are saved.
	has_many :comments
	validates :title, presence: true,
										length: { minimum: 5 }
end
