class AddPriceToBundles < ActiveRecord::Migration
  def change
    add_column :bundles, :price, :decimal
  end
end
