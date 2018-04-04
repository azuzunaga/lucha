# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Use jbuilder to translate between snake and camel case
Jbuilder.key_format camelize: :lower
