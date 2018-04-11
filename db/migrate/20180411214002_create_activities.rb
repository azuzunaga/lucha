class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.text :polyline, null: false
      t.text :big_image_url, null: false
      t.float :distance, null: false
      t.float :elevation, null: false
      t.integer :duration, null: false
      t.string :sport, null: false
      t.datetime :start_datetime, null: false

      t.timestamps
    end
  end
end
