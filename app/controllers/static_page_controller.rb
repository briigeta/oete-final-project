class StaticPageController < ApplicationController
  def index
  end

  def home
  end

  def writing
  end

  def profile
  end

  def edit
    @user = current_user # Fetch the user's profile information
  end

  def update
    if current_user.update(user_params)
      flash[:notice] = "Profile updated successfully."
      redirect_to profile_path
    else
      flash[:alert] = "Profile update failed."
      render :edit
    end
  end
  
  def user_params
    params.require(:user).permit(:username, :bio, :location, :image, :banner_image)
  end
  
 
end







