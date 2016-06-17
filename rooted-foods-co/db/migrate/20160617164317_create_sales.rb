class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.integer :amount
      t.boolean :refunded, :default => false
      t.boolean :paid, :default => true
      t.timestamps null: false
    end
  end
end
