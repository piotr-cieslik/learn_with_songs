Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: :json } do
    resources :users, :only => [:show, :create, :update, :destroy]
    resources :sessions, :only => [:create, :destroy]
    resources :songs, :only => [:index, :show, :create, :update, :destroy]
  end

  get '/*page', to: 'pages#index'
end
