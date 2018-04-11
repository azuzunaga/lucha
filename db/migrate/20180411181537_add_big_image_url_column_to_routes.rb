class AddBigImageUrlColumnToRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :big_image_url, :text
  end
end
