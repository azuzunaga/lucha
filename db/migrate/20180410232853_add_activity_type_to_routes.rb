class AddActivityTypeToRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :type, :string
  end
end
