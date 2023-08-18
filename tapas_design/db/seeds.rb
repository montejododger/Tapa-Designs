# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

require 'open-uri'
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    CartItem.destroy_all
    Review.destroy_all
    Product.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    ApplicationRecord.connection.reset_pk_sequence!('cart_items')
  
    puts "Creating users..."
    # Create one user with an easy to remember email, and password:
    User.create!(
      first_name: 'Demo',
      last_name: 'user',
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        password: 'password'
      }) 
    end

    puts 'Done Creating Users"'

    puts 'Creating Products...'



    p1 =  Product.create!({
      name: "DIRT SHIRT - SHORT SLEEVE - MEN'S",
      description: "Our Dirt Shirt can handle whatever you throw at it. Made from organic cotton with just the right amount of stretch, this button-up has a casual look that performs equally as well around town, on a hike, or on the bike.",
      price: 89.00,
      category: "Mens",
      size: "S M L XL",
      color: "Sand Brick Pond Blue Olive Black",
    })

    p2 = Product.create!({
      name: "DIRT HOODIE - MEN'S",
      description: "The Dirt Hoodie is the go-to wardrobe staple built with 100% organic, midweight brushed french terry cotton. With a matching drawcord to other pieces in the Dirt Collection line, this silhouette is unmistakably Topo.",
      price: 119.00,
      category: "Mens",
      size: "S M L XL",
      color: "Natural",
    })

    p3 = Product.create!({
      name: "MOUNTAIN PANTS RIPSTOP - MEN'S",
      description: "The Mountain Pants Ripstop offer a new outdoor style with updates to a Topo Designs favorite. With an added double-knee layer for durability and an elastic waistband for an adjustable comfort fit, this pant is made with a cotton and nylon blend, giving it a broken-in feel from the start. We've added a little bit of spandex to give it some stretch in just the right spots.",
      price: 129.00,
      category: "Mens",
      size: "S M L XL",
      color: "Earth",
    })

    p4= Product.create!({
      name: "GLOBAL SHIRT - WOMEN'S",
      description: "Designed for outdoor, travel, and life—the Global Shirt combines effortless versatility with just enough thoughtful design details to make it a world-class piece.",

      price: 109.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Sand Brick Pond Blue Olive Black",
    })
  
    p5 = Product.create!({
      name: "SHERPA JACKET - WOMEN'S",
      description: "Fit for travel, our reversible Sherpa Jacket features fleece on one side, and a smooth, DWR-finished tech fabric on the other. Hand pockets on both sides and a reversible zipper make for an easy transition, whichever way you want to wear it.",
      price: 85.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Black",
    })
    
    p6 = Product.create!({
      name: "SHERPA JACKET - WOMEN'S - SALE",
      description: "Fit for travel, our reversible Sherpa Jacket features fleece on one side, and a smooth, DWR-finished tech fabric on the other. Hand pockets on both sides and a reversible zipper make for an easy transition, whichever way you want to wear it.",
      price: 85.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Sand Brick Pond Blue Olive Black",
    })
    
    p7 = Product.create!({
      name: "SHERPA JACKET - WOMEN'S FINAL SALE",
      description: "Fit for travel, our reversible Sherpa Jacket features fleece on one side, and a smooth, DWR-finished tech fabric on the other. Hand pockets on both sides and a reversible zipper make for an easy transition, whichever way you want to wear it.",
      price: 85.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Black",
    })
    
    p8 = Product.create!({
      name: "SHERPA JACKET - WOMEN FINAL SALE",
      description: "Fit for travel, our reversible Sherpa Jacket features fleece on one side, and a smooth, DWR-finished tech fabric on the other. Hand pockets on both sides and a reversible zipper make for an easy transition, whichever way you want to wear it.",
      price: 85.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Sand Brick Pond Blue Olive Black",
    })


    p1.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front.webp'), filename: 'dirt_hoodie_back.webp' )

    p1.photos.attach(io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_hoodie/dirt_hoodie_back.webp'), filename: 'dirt_hoodie_back.webp')

    p1.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front-model.webp'), filename: 'dirt_hoodie_front_model.webp')

    p1.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-side-model.webp'), filename: 'dirt_hoodie_side_model.webp')


    p2.photos.attach(io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_hoodie/dirt_hoodie_back.webp'), filename: 'dirt_hoodie_back.webp')

    p3.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front-model.webp'), filename: 'dirt_hoodie_front_model.webp')

    p4.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-side-model.webp'), filename: 'dirt_hoodie_side_model.webp')

    p5.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front.webp'), filename: 'dirt_hoodie_back.webp' )

    p6.photos.attach(io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_hoodie/dirt_hoodie_back.webp'), filename: 'dirt_hoodie_back.webp')

    p7.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front-model.webp'), filename: 'dirt_hoodie_front_model.webp')

    p8.photos.attach(io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-side-model.webp'), filename: 'dirt_hoodie_side_model.webp')

    puts 'Done Creating Products"'

    puts 'Creating Reviews'
    
    Product.all.map do |product|
      5.times do
        Review.create!(
          title: Faker::Book.title, 
          rating: rand(2..5),
          body: Faker::Movies::Lebowski.quote,
          user_id: rand(2..9), # userId 1 is the demo user
          product_id: product.id
        )
      end
    end
    
    puts 'Done Creating Reviews'
    
    puts "Done!"
