Rails.application.routes.draw do
  resources :poems do
     resources :comments
  end
  devise_for :users
  devise_scope :user do
    get 'users/sign_out', to: "devise/sessions#destroy"
  end
  root 'static_page#index'
  get '/home', to: 'application#home', as: 'home'
  get '/writing', to: 'poems#new'
  get '/profile', to: 'static_page#profile'

end

