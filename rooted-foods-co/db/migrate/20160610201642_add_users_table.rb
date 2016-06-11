class AddUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :shipping_address
      t.string :shipping_city
      t.string :shipping_province
      t.string :shipping_country
      t.string :shipping_postal_code
      t.string :billing_address
      t.string :billing_city
      t.string :billing_province
      t.string :billing_country
      t.string :billing_postal_code
      t.string :email
      t.string :phone
      t.date :time
      t.timestamps null: false
    end
  end
end
