class ChangeRouteNameToRouteTitle < ActiveRecord::Migration[5.1]
  def change
    rename_column :routes, :name, :title
  end
end
