Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :show]
    resources :photos, only: [:index, :show]
  end

  resources :rest_clients, only: [:index]

  root 'static_pages#root'
end
