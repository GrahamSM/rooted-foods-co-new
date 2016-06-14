class AddImageToBundle < ActiveRecord::Migration
  def change
    add_column :bundles, :image, :string
  end
end
