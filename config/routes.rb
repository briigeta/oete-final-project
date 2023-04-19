Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    delete 'logout', to: 'devise/sessions#destroy'
  end
   root to:"static_page#landing"
   get '/home', to: 'static_page#home'
   get '/writing', to: 'static_page#writing'
   get '/profile', to: 'static_page#profile'

end
