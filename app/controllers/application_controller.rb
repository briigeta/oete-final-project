class ApplicationController < ActionController::Base
  def home
    @poems = Poem.all
    render "static_page/home"
  end
  
  
   def after_sign_in_path_for(resource)
        home_path
      end
    
      def after_sign_up_path_for(resource)
        home_path
      end

    
      
end
