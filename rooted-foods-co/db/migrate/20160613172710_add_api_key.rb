class AddApiKey < ActiveRecord::Migration
  def change
    create_table :api_keys do |t|
      t.string :access_token
      t.datetime :expires_at
      t.datetime :last_access
      t.references :user, index: true, foreign_key: true
      t.index [:access_token]
      t.timestamps null: false
    end
  end
end
