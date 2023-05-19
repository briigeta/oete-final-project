# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController


  def update
    @user = current_user
    @user.image.attach(params[:user][:image]) if params[:user][:image].present?
    @user.banner_image.attach(params[:user][:banner_image]) if params[:user][:banner_image].present?
    if @user.save
      redirect_to profile_path, notice: "Profile updated successfully."
    else
      flash[:alert] = "Failed to update profile."
      render :edit
    end
  end
  

  private

  def user_params
    params.require(:user).permit(:image,:banner_image)
  end
end

  # before_action :configure_sign_up_params, only: [:create]
  #z before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  # def create
  #   super
  # end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
