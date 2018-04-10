class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :author_id, null: false
      t.text :polyline, null: false
      t.text :image_url, null: false
      t.float :distance, null: false
      t.integer :elevation, null: false
      t.integer :duration, null: false

      t.timestamps
    end
    add_index :routes, :author_id
  end
end
