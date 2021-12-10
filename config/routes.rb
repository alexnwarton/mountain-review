Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  resources :resorts, only: [:index, :show] do
    resources :reviews, only: [:create, :update, :destroy]   
  end
  resources :reviews, only: [:index, :show]
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
