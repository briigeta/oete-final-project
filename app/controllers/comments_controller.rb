class CommentsController < ApplicationController
    before_action :authenticate_user!

    def create
        @poem = Poem.find(params[:poems_id])
        @comment = @poem.comments.create(comment_params)
        @comment.user = current.user

        if @comment.save
            flash[:notice] =" Your poem has been created"
            redirect_to

    end

    def destroy

    end

    private

     def comment_params
        params.require(:comment).permit(:body)
     end


end
