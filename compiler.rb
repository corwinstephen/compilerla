require 'rubygems'
require 'sinatra/base'
require 'sinatra/assetpack'
require 'haml'

class Compiler < Sinatra::Base

  register Sinatra::AssetPack

  assets do

    js :application, [
      '/js/*.js'
    ]

    css :application, [
      '/css/*.css',
    ]

    js_compression :jsmin
    css_compression :scss

  end

  get '/' do
    haml :index
  end

end