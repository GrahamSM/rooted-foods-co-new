class AddBundleIdToOrderItems < ActiveRecord::Migration
  def change
    add_column :order_items, :bundle_id, :integer
  end
end
