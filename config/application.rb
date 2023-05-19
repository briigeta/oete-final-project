require_relative "boot"
require_relative "boot"

require "rails/all"
require "action_text/engine"

Bundler.require(*Rails.groups)

module OeteWebsiteFinal
  class Application < Rails::Application
    config.tinymce.install = :copy
    config.load_defaults 7.0
   
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
