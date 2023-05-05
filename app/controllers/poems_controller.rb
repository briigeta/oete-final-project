
  class PoemsController < ApplicationController
    def new
      @poem = current_user.poems.build
    end
  
    def create
      @poem = current_user.poems.new(poem_params)
  
      if @poem.save
        redirect_to home_path
      else
        render :new
      end
    end
  
    def show
      @poem = Poem.find(params[:id])
    end
  
    private
  
    def poem_params
      params.require(:poem).permit(:title, :body)
    end
  end
  

