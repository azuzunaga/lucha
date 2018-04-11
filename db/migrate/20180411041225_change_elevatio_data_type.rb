class ChangeElevatioDataType < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :elevation, :float
  end
end
