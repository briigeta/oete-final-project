class CommentsController < ApplicationController
    before_action :authenticate_user!
  
  def create
    @poem_post = PoemPost.find(params[:poem_post_id])
    @comment = @poem_post.comments.build(comment_params)
    @comment.user = current_user

    if @comment.save
      redirect_to poem_post_path(@poem_post), notice: "Comment created successfully."
    else
      redirect_to poem_post_path(@poem_post), alert: "Error creating comment."
    end
  end
  
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to @comment.poem_post, notice: "Comment was successfully deleted."
  end
  
  def show
    @poem_post = PoemPost.find(params[:id])
    @comment = Comment.new
    @form = Form.new 
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

end
