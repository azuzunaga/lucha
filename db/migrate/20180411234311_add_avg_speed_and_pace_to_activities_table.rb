class AddAvgSpeedAndPaceToActivitiesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :activities, :avg_speed, :float
    add_column :activities, :pace, :integer
  end
end
