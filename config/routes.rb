Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, :only => [:show, :create, :update, :destroy]
  end
end
