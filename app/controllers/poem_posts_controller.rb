class PoemPostsController < ApplicationController
    def index
      @poem_posts = PoemPost.all
    end
    
    def show
      @poem_post = PoemPost.find(params[:id])
    end
  
    def new
      @poem_post = PoemPost.new
    end
  
    def create
      @poem_post = current_user.poem_posts.build(poem_post_params)
      if @poem_post.save
      redirect_to home_path
      else
        render :new, status: :unprocessable_entity 
      end
    end

    def destroy
      @poem_post = PoemPost.find(params[:id])
      @poem_post.destroy
      redirect_to @poem_post
    end
    

    def edit
@poem_post = PoemPost.find(params[:id])
    end

    def update
        @poem_post = PoemPost.find(params[:id])
        if @poem_post.update(poem_post_params)
        redirect_to @poem_post
        else
        render :edit, status: :unprocessable_entity 
        end
    end

  
    private
  
    def poem_post_params
      params.require(:poem_post).permit(:title, :content)
    end
  end
  