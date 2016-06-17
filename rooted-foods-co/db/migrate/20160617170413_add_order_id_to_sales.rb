class AddOrderIdToSales < ActiveRecord::Migration
  def change
    add_column :sales, :order_id, :integer
  end
end
