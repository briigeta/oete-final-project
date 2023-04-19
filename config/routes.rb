Rails.application.routes.draw do
  get 'static_page/landing'
  get 'static_page/home'
  get 'static_page/writing'
  get 'static_page/profile'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
