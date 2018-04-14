Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :reviews, only: [ :edit, :update, :destroy ]
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:index, :create ]
    end
  end

  get '/api/search/:searchParams', to: 'api/searches#search'

  root 'static_pages#root'
end
