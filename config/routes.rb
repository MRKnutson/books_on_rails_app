Rails.application.routes.draw do
  # resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'books#app'

  get '/books', to: 'books#index'
  get '/books/:id', to: 'books#show'
  
  post '/books', to: 'books#create'
  
  put '/books/:id', to: 'books#update'
  patch '/books/:id', to: 'books#update'

  delete '/books/:id', to: 'books#destroy'
end
