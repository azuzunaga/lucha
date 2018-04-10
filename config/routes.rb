Rails.application.routes.draw do
  namespace :api do
    get 'routes/index'
  end

  namespace :api do
    get 'routes/show'
  end

  namespace :api do
    get 'routes/create'
  end

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :routes, only: [:create, :index]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

end
