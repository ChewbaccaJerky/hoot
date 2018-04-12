default['ruby-ng']['ruby_version'] = "2.4"
default['nodejs']['version'] = "6.10.1"
default['nodejs']['npm']['version'] = "5.2.0"
default['nginx']['default_site_enabled'] = false

default[:hoot][:git_repository] = "https://github.com/chewbaccajerky/hoot"
default[:hoot][:git_revision] = "master"
default[:hoot][:path] = "/opt/hoot"

default[:hoot][:rails_env] = "production"
default[:hoot][:log_to_stdout] = "true"

default[:hoot][:environment] = {
  "SECRET_KEY_BASE": node[:hoot][:secret_key_base],
  "DATABASE_URL": node[:hoot][:database_url],
  "RAILS_ENV": node[:hoot][:rails_env],
  "RAILS_LOG_TO_STDOUT": node[:hoot][:log_to_stdout]
}

default[:hoot][:start_cmd] = "unicorn -E production -c /opt/unicorn.rb"