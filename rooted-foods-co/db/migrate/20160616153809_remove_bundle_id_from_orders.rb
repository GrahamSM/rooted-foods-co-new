class RemoveBundleIdFromOrders < ActiveRecord::Migration
  def change
    remove_column :orders, :bundle_id
  end
end
