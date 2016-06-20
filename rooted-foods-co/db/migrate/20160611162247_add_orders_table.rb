class AddOrdersTable < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.boolean :recurring
      t.boolean :active, :default => true
      t.integer :bundle_id
      t.integer :transaction_id
      t.timestamps null: false
    end
  end
end
