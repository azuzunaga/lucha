class RemoveActivitiesNullConstraintsForRouteAssocData < ActiveRecord::Migration[5.1]
  def change
    change_column :activities, :polyline, :text, null: true
    change_column :activities, :big_image_url, :text, null: true
  end
end
