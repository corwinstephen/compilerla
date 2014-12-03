require 'rubygems'
require 'sinatra'
require 'sinatra/base'
require 'sinatra/assetpack'
require 'haml'

get '/' do
  haml :index
end

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