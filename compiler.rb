require 'rubygems'
require 'sinatra/base'
require 'sinatra/assetpack'
require 'haml'
require 'sass'
require 'nationbuilder'
require 'json'

class Compiler < Sinatra::Base

  register Sinatra::AssetPack

  assets do
    js :application, [
      '/js/jquery.js',
      '/js/*.js'
    ]

    css :application, [
      '/css/*.css',
    ]

    js_compression :jsmin
    css_compression :sass

  end

  get '/' do
    haml :index
  end

  get '/about' do
    haml :about
  end

  get '/team' do
    haml :team
  end

  post '/people' do
    content_type :json

    nb_client = NationBuilder::Client.new('dtla', '8fe18b901096775f283bb9bfd0ec70ca24689feb4dcd3c5262f1a960fb87f246')
    post_data = {
      person: {
        email: params[:email],
        tags: ["compiler", "compilerla website signup"]
      }
    }

    nb_client.call(:people, :create, post_data).to_json
  end

end