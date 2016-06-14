class CreateProductBundles < ActiveRecord::Migration
  def change
    create_table :product_bundles do |t|
      t.references :product, index: true, foreign_key: true
      t.references :bundle, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
