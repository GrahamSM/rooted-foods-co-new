class AddPasswordDigestToUsers < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :string
    add_column :users, :admin, :boolean
    add_index :users, [:email]
  end
end
