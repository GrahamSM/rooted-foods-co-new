class AddBundlesTable < ActiveRecord::Migration
  def change
    create_table :bundles do |t|
      t.string :description
      t.timestamps null: false
    end
  end
end
