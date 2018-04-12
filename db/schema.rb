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

ActiveRecord::Schema.define(version: 20180412043855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.text "polyline"
    t.text "big_image_url"
    t.float "distance", null: false
    t.float "elevation", null: false
    t.integer "duration", null: false
    t.string "sport", null: false
    t.datetime "start_datetime", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "avg_speed"
    t.integer "pace"
  end

  create_table "routes", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.integer "author_id", null: false
    t.text "polyline", null: false
    t.text "image_url", null: false
    t.float "distance", null: false
    t.float "elevation", null: false
    t.integer "duration", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sport"
    t.text "big_image_url"
    t.index ["author_id"], name: "index_routes_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
