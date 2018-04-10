class RemoveNullConstraintFromRoutesDescription < ActiveRecord::Migration[5.1]
  def change
    change_column :routes, :description, :text, null: true
  end
end
