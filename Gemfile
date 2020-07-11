source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

gem 'appengine',              '~> 0.5.0'
gem 'devise',                 '~> 4.7',   '>= 4.7.2'
gem 'jbuilder',               '~> 2.7'
gem 'pg',                     '>= 0.18',  '< 2.0'
gem 'puma',                   '~> 4.1'
gem 'rails',                  '~> 6.0.3', '>= 6.0.3.2'
gem 'sass-rails',             '>= 6'
gem 'turbolinks',             '~> 5'
gem 'webpacker',              '~> 4.0'
gem 'react-rails',            '~> 2.6',   '>= 2.6.1'

gem 'dotenv-rails', groups: [:development, :test]

# gem 'redis', '~> 4.0'
# gem 'bcrypt', '~> 3.1.7'
gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development, :test do
  gem 'rspec-rails', '~> 4.0.0'
  gem "factory_bot_rails"
  gem 'shoulda-matchers', '~> 4.0'
end

gem 'devise-jwt', '~> 0.6.0'

group :test do
  gem "json_matchers"
end

group :development do
  gem 'pry-rescue'
  gem 'pry-stack_explorer'
end
