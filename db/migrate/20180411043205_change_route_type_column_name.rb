class ChangeRouteTypeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :routes, :type, :sport
  end
end
