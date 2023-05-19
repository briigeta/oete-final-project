Rails.application.routes.draw do

  devise_for :users
  devise_scope :user do
    get 'users/sign_out', to: "devise/sessions#destroy"
    delete '/cancel_account', to: 'registrations#cancel_account', as: 'cancel_account'

  end

  
  resources :poem_posts
  resources :poem_posts do
    resources :comments, only: [:create, :destroy]
  end

  root 'static_page#index'
  get '/home', to: 'poem_posts#index'
  get '/writing', to: 'poem_posts#new'
  get '/poem_posts/:id', to: 'poem_posts#show'
  patch '/poem_posts/:id', to: 'poem_posts#update'
  delete '/poem_posts/:id', to: 'poem_posts#destroy'
  get '/poem_posts/:id/edit', to: 'poem_posts#edit'
  post '/writing', to: 'poem_posts#create'
  get '/profile', to: 'static_page#profile'
get '/profile/edit', to: 'static_page#edit', as: 'edit_profile'
patch '/profile', to: 'static_page#update', as: 'update_profile'
get 'search', to: 'search#index', as: 'search'







end

