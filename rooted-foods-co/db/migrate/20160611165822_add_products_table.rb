class AddProductsTable < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :distributor
      t.string :SKU
      t.decimal :price
      t.integer :category_id
      t.string :images
      t.timestamps null: false
    end
  end
end
