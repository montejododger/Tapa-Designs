# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Creating users..."
    # Create one user with an easy to remember email, and password:
    User.create!(
      first_name: 'demo',
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



    p1 = Product.create!({
      name: "DIRT SHIRT - SHORT SLEEVE - MEN'S",
      description: "
      Our Dirt Shirt can handle whatever you throw at it. Made from organic cotton with just the right amount of stretch, this button-up has a casual look that performs equally as well around town, on a hike, or on the bike.",
      price: 89.00,
      category: "Men's",
      size: "M",
      color: "Sand",
    })

    p2 = Product.create!({
      name: "DIRT HOODIE - MEN'S",
      description: "The Dirt Hoodie is the go-to wardrobe staple built with 100% organic, midweight brushed french terry cotton. With a matching drawcord to other pieces in the Dirt Collection line, this silhouette is unmistakably Topo.",
      price: 119.00,
      category: "Men's",
      size: "L",
      color: "Natural",
    })

    p3 = Product.create!({
      name: "MOUNTAIN PANTS RIPSTOP - MEN'S",
      description: "The Mountain Pants Ripstop offer a new outdoor style with updates to a Topo Designs favorite. With an added double-knee layer for durability and an elastic waistband for an adjustable comfort fit, this pant is made with a cotton and nylon blend, giving it a broken-in feel from the start. We've added a little bit of spandex to give it some stretch in just the right spots.",
      price: 129.00,
      category: "Mens's",
      size: "S",
      color: "Earth",
    })

    p4 = Product.create!({
      name: "GLOBAL SHIRT - WOMEN'S",
      description: "Designed for outdoor, travel, and life—the Global Shirt combines effortless versatility with just enough thoughtful design details to make it a world-class piece.",
      description: "",
      price: 109.00,
      category: "Women's",
      size: "M",
      color: "Olive",
    })
    
    p5 = Product.create!({
      name: "SHERPA JACKET - WOMEN'S - FINAL SALE",
      price: 100,
      category: "Women's",
      size: "L",
      color: "Black",
    })


    puts 'Done Creating Products"'
    


    puts "Done!"
  end