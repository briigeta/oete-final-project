class SearchController < ApplicationController
    def index
        @query = params[:query]
        @users = User.where("username LIKE ?", "%#{@query}%")
        @poems = PoemPost.where("title LIKE ?", "%#{@query}%")
      end
end
