require 'rubygems'
require 'sinatra/base'
require 'sinatra/assetpack'
require 'haml'
require 'sass'

class Compiler < Sinatra::Base

  register Sinatra::AssetPack

  assets do
    js :js, [
      '/js/*.js'
    ]

    css :scss, [
      '/css/*.css',
    ]

    js_compression :jsmin
    css_compression :scss

  end

  get '/' do
    haml :index
  end

end