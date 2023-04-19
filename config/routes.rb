Rails.application.routes.draw do
  #get 'static_page/landing'
  #get 'static_page/home'
  #get 'static_page/writing'
  #get 'static_page/profile'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   root to:"static_page#landing"
   get '/home', to: 'static_page#home'
   get '/writing', to: 'static_page#writing'
   get '/profile', to: 'static_page#profile'


end
