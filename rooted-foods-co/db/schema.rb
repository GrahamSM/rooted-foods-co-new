# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160613174127) do

  create_table "api_keys", force: :cascade do |t|
    t.string   "access_token"
    t.datetime "expires_at"
    t.datetime "last_access"
    t.integer  "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "api_keys", ["access_token"], name: "index_api_keys_on_access_token"
  add_index "api_keys", ["user_id"], name: "index_api_keys_on_user_id"

  create_table "bundles", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id"
    t.boolean  "recurring"
    t.boolean  "active"
    t.integer  "bundle_id"
    t.integer  "transaction_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "products", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "distributor"
    t.string   "SKU"
    t.decimal  "price"
    t.integer  "category_id"
    t.string   "images"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "shipping_address"
    t.string   "shipping_city"
    t.string   "shipping_province"
    t.string   "shipping_country"
    t.string   "shipping_postal_code"
    t.string   "billing_address"
    t.string   "billing_city"
    t.string   "billing_province"
    t.string   "billing_country"
    t.string   "billing_postal_code"
    t.string   "email"
    t.string   "phone"
    t.date     "time"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "password_digest"
    t.boolean  "admin"
    t.string   "username"
  end

  add_index "users", ["email"], name: "index_users_on_email"

end
