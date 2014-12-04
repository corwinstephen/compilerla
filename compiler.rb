require 'rubygems'
require 'sinatra/base'
require 'sinatra/assetpack'
require 'haml'
require 'sass'

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

end