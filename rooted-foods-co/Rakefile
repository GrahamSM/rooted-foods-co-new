# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

task "db:populate" => [ :environment ] do
  Category.create!(name: "Meat", description: Faker::Hacker.say_something_smart)
  Category.create!(name: "Produce", description: Faker::Hacker.say_something_smart)
  Category.create!(name: "Grains", description: Faker::Hacker.say_something_smart)

  6.times do |i|
    my_bundle = Bundle.create!(description: Faker::Hacker.say_something_smart, image: Faker::Placeholdit.image)
    3.times do |i|
      my_product = Product.create!(name: Faker::Company.name, description: Faker::Company.catch_phrase, distributor: Faker::Internet.user_name, SKU: 'SOMEPRO', price: Faker::Commerce.price, images: "https://placehold.it/300x300.png/000")
      ProductBundle.create!(bundle: my_bundle, product: my_product)
      Category.all[i].products << my_product
    end
    my_bundle.set_price
    my_bundle.save!
  end

end
