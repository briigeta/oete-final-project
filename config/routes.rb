Rails.application.routes.draw do

  devise_for :users
  devise_scope :user do
    get 'users/sign_out', to: "devise/sessions#destroy"
  end
  root 'static_page#index'
  get '/home', to: 'static_page#home'
  get '/writing', to: 'static_page#writing'
  get '/profile', to: 'static_page#profile'

end

