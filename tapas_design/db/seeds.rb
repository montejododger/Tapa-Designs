# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

require 'open-uri'

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
      last_name: 'User',
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
      size: "X-Small Small Medium Large X-Large",
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
      name: "RIVER HOODIE - WOMEN'S",
      description: "The River Hoodie is soaked in technical features like a 30+ UPF rating, moisture-wicking properties, and an anti-microbial finish. This hoodie works well as a stand alone piece, or as a mid layer for chilly days.",
      price: 99.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Haze Peach-Pebble Pastel-Camo",
    })

    p7 = Product.create!({
      name: "DIRT JACKET - WOMEN'S",
      description: "The Dirt Jacket can handle whatever you throw at it. Made from organic cotton with just the right amount of stretch, this piece has a casual look that performs equally as well on morning errands, an afternoon in the yard, or a nightly stroll through town.",
      price: 129.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Peppercorn Sand Black Olive Brick",
    })

    p8 = Product.create!({
      name: "RIVER SHORTS - WOMEN'S",
      description: "Our River Shorts ensure you look good in and out of the water with a fit that's as at home on the beach or running errands around town. These shorts will keep you cool whether you're paddling the pond or pounding the pavement.",
      price: 99.00,
      category: "Womens",
      size: "XS S M L XL",
      color: "Olive Black",
    })

    p9 = Product.create!({
      name: "MOUNTAIN ACCESSORY BAG",
      description: "Built to keep you organized, these durable bags will help you keep track of your stuff. The micro size is great to carry cash and cards, AirPods and camera batteries, or any other small item you want to keep handy and safe. A custom carabiner adds even more versatility to this everyday essential.",
      price: 19.00,
      category: "accessories",
      size: "Micro",
      color: "Burgandy Hemp Clay Pond Blue",
    })

    p10 = Product.create!({
      name: "CORDUROY TRUCKER HAT - STRATA MAP",
      description: "This corduroy hat features a 5-panel structured silhouette, with an embroidered custom front design, and an adjustable quick-release back closure.",
      price: 34.00,
      category: "accessories",
      size: "One-Size",
      color: "Olive Tan",
    })

    p11 = Product.create!({
      name: "GLOBAL HAT",
      description: "A trusty companion for sunny travels. Our Global Hat’s unstructured 5-panel construction makes it easily packable and machine washable. Our signature adjustable webbing buckle closure guarantees a comfortable, customizable fit.",
      price: 34.00,
      category: "accessories",
      size: "One-Size",
      color: "Khaki Clay Black Olive",
    })

    p12 = Product.create!({
      name: "WORK CAP",
      description: "Our Work Cap is a tightly knit acrylic beanie in a double layer style to keep you cozy wherever your trails take you.",
      price: 26.00,
      category: "accessories",
      size: "One-Size",
      color: "Black Clay Olive Blue",
    })

    # p13 = Product.create!({
    #   name: "",
    #   description: "",
    #   price: ,
    #   category: "accessories",
    #   size: "",
    #   color: "",
    # })

    # p = Product.create!({
    #   name: "",
    #   description: "",
    #   price: ,
    #   category: "accessories",
    #   size: "",
    #   color: "",
    # })

#! TODO: change the seeds back to aws when mergin with new-main again
#! This will be toggled for dev or production

# AWS SEED IMAGES
if Rails.env.production?

      p1_photos = [
        { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_shirt_ss/dirt_shirt_ss_mens_front.webp'), filename: ''},
        { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_shirt_ss/number2.webp'), filename: ''},
        { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_shirt_ss/number3.webp'), filename: ''},
        { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_shirt_ss/number4.webp'), filename: ''}
      ]

      p2_photos = [
      { io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front.webp'), filename: 'dirt_hoodie_front.webp' },
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_hoodie/dirt_hoodie_back.webp'), filename: 'dirt_hoodie_back.webp' },
      { io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-front-model.webp'), filename: 'dirt_hoodie_front_model.webp' },
      { io: URI.open('https://tapadesigns-dev.s3.us-west-1.amazonaws.com/dirt_hoodie/dirt-hoodie-side-model.webp'), filename: 'dirt_hoodie_side_model.webp' }
    ]

    p3_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/ripstop/number1.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/ripstop/number2.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/ripstop/number3.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/ripstop/number4.webp'), filename: ''}
    ]

    p4_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global+shirt+womans/number1.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global+shirt+womans/number2.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global+shirt+womans/number3.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global+shirt+womans/number4.webp'), filename: ''}
    ]


    p5_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/sherpa_jacket_w/number1.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/sherpa_jacket_w/number2.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/sherpa_jacket_w/number3.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/sherpa_jacket_w/number4.webp'), filename: ''}
    ]



    p6_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_hoodie_w/S23-W-RiverHoodie-PastelCamo-121202455970-Front-1_3bc08884-036f-418a-83d5-6530633a2757_800x800_crop_center.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_hoodie_w/number2.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_hoodie_w/number3.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_hoodie_w/number4.webp'), filename: ''}
    ]

    p7_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_jacket_w/number1.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_jacket_w/number2.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_jacket_w/number3.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/dirt_jacket_w/number4.webp'), filename: ''}
    ]

    p8_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_shorts-w/number1.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_shorts-w/number2.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_shorts-w/number3.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/river_shorts-w/number4.progressive.webp'), filename: ''}
    ]

    p9_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/mountains_access_bag/number1.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/mountains_access_bag/number2.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/mountains_access_bag/number3.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/mountains_access_bag/number4.progressive.webp'), filename: ''}
    ]

    p10_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/CORDUROY+TRUCKER+HAT+-+STRATA+MAP/number1.progressive.png.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/CORDUROY+TRUCKER+HAT+-+STRATA+MAP/number2.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/CORDUROY+TRUCKER+HAT+-+STRATA+MAP/number3.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/CORDUROY+TRUCKER+HAT+-+STRATA+MAP/number4.progressive.webp'), filename: ''}
    ]


    p11_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global_hat/number1.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global_hat/number2.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global_hat/number3.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/global_hat/number4.progressive.webp'), filename: ''}
    ]

    p12_photos = [
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/work_cap/number1.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/work_cap/number2.progressive.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/work_cap/number3.webp'), filename: ''},
      { io: URI.open('https://tapadesigns.s3.us-west-1.amazonaws.com/product_images/products/work_cap/number4.webp'), filename: ''}
    ]


elsif Rails.env.development?
# LOCAL SEED IMAGES

      p1_photos = [
        { io: File.open(Rails.root.join('public', 'products', 'dirt_shirt_ss', 'dirt_shirt_ss_mens_front.webp')), filename: 'dirt_shirt_ss_mens_front.webp'},
        { io: File.open(Rails.root.join('public', 'products', 'dirt_shirt_ss', 'number2.webp')), filename: 'number2.webp'},
        { io: File.open(Rails.root.join('public', 'products', 'dirt_shirt_ss', 'number3.webp')), filename: 'number3.webp'},
        { io: File.open(Rails.root.join('public', 'products', 'dirt_shirt_ss', 'number4.webp')), filename: 'number4.webp'}
      ]

      p2_photos = [
        { io: File.open(Rails.root.join('public', 'products', 'dirt_hoodie', 'dirt-hoodie-front.webp')), filename: 'dirt_hoodie_front.webp'},
        { io: File.open(Rails.root.join('public', 'products', 'dirt_hoodie', 'dirt_hoodie_back.webp')), filename: 'dirt_hoodie_back.webp'},
        { io: File.open(Rails.root.join('public', 'products', 'dirt_hoodie', 'dirt-hoodie-front-model.webp')), filename: 'dirt_hoodie_front_model.webp'},
        { io: File.open(Rails.root.join('public', 'products', 'dirt_hoodie', 'dirt-hoodie-side-model.webp')), filename: 'dirt_hoodie_side_model.webp'}
        ]

        p3_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'ripstop', 'number1.webp')), filename: 'number1.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'ripstop', 'number2.webp')), filename: 'number2.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'ripstop', 'number3.webp')), filename: 'number3.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'ripstop', 'number4.webp')), filename: 'number4.webp'}
        ]

        p4_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'global_shirt_womans', 'number1.webp')), filename: 'number1.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'global_shirt_womans', 'number2.webp')), filename: 'number2.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'global_shirt_womans', 'number3.webp')), filename: 'number3.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'global_shirt_womans', 'number4.webp')), filename: 'number4.webp'}
        ]


        p5_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'sherpa_jacket_w', 'number1.webp')), filename: 'number1.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'sherpa_jacket_w', 'number2.webp')), filename: 'number2.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'sherpa_jacket_w', 'number3.webp')), filename: 'number3.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'sherpa_jacket_w', 'number4.webp')), filename: 'number4.webp'}
        ]

        p6_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'river_hoodie_w', 'S23-W-RiverHoodie-PastelCamo-121202455970-Front-1_3bc08884-036f-418a-83d5-6530633a2757_800x800_crop_center.progressive.webp')), filename: 'S23-W-RiverHoodie-PastelCamo-121202455970-Front-1_3bc08884-036f-418a-83d5-6530633a2757_800x800_crop_center.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'river_hoodie_w', 'number2.webp')), filename: 'number2.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'river_hoodie_w', 'number3.webp')), filename: 'number3.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'river_hoodie_w', 'number4.webp')), filename: 'number4.webp'}
        ]

        p7_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'dirt_jacket_w', 'number1.webp')), filename: 'number1.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'dirt_jacket_w', 'number2.webp')), filename: 'number2.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'dirt_jacket_w', 'number3.webp')), filename: 'number3.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'dirt_jacket_w', 'number4.webp')), filename: 'number4.webp'}
        ]


        p8_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'river_shorts-w', 'number1.progressive.webp')), filename: 'number1.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'river_shorts-w', 'number2.progressive.webp')), filename: 'number2.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'river_shorts-w', 'number3.progressive.webp')), filename: 'number3.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'river_shorts-w', 'number4.progressive.webp')), filename: 'number4.progressive.webp'}
        ]

        p9_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'mountains_access_bag', 'number1.progressive.webp')), filename: 'number1.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'mountains_access_bag', 'number2.progressive.webp')), filename: 'number2.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'mountains_access_bag', 'number3.progressive.webp')), filename: 'number3.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'mountains_access_bag', 'number4.progressive.webp')), filename: 'number4.progressive.webp'}
        ]

        p10_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'CORDUROY_TRUCKER_HAT_STRATA_MAP', 'number1.progressive.png.webp')), filename: 'number1.progressive.png.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'CORDUROY_TRUCKER_HAT_STRATA_MAP', 'number2.progressive.webp')), filename: 'number2.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'CORDUROY_TRUCKER_HAT_STRATA_MAP', 'number3.progressive.webp')), filename: 'number3.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'CORDUROY_TRUCKER_HAT_STRATA_MAP', 'number4.progressive.webp')), filename: 'number4.progressive.webp'}
        ]

        p11_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'global_hat', 'number1.progressive.webp')), filename: 'number1.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'global_hat', 'number2.progressive.webp')), filename: 'number2.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'global_hat', 'number3.progressive.webp')), filename: 'number3.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'global_hat', 'number4.progressive.webp')), filename: 'number4.progressive.webp'}
        ]

        p12_photos = [
          { io: File.open(Rails.root.join('public', 'products', 'work_cap', 'number1.progressive.webp')), filename: 'number1.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'work_cap', 'number2.progressive.webp')), filename: 'number2.progressive.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'work_cap', 'number3.webp')), filename: 'number3.webp'},
          { io: File.open(Rails.root.join('public', 'products', 'work_cap', 'number4.webp')), filename: 'number4.webp'}
        ]

end


    #object with the product as the key and the photo array as its value
  products_with_photos = {
      p1 => p1_photos,
      p2 => p2_photos,
      p3 => p3_photos,
      p4 => p4_photos,
      p5 => p5_photos,
      p6 => p6_photos,
      p7 => p7_photos,
      p8 => p8_photos,
      p9 => p9_photos,
      p10 => p10_photos,
      p11 => p11_photos,
      p12 => p12_photos
  }

products_with_photos.each do |product, photos|
  photos.each do |photo|
    product.photos.attach(photo)
  end
end


    puts 'Done Creating Products'

    # p_photos = [
    #   { io: URI.open(''), filename: ''},
    #   { io: URI.open(''), filename: ''},
    #   { io: URI.open(''), filename: ''},
    #   { io: URI.open(''), filename: ''}
    # ]

    # p_photos.each do |photo|
    #   p.photos.attach(photo)
    # end




    puts 'Creating Reviews'

    Product.all.map do |product|
      5.times do
        Review.create!(
          title: Faker::Book.title,
          rating: rand(2..5),
          body: Faker::Movies::Lebowski.quote,
          user_id: rand(2..9), # userId 1 is the demo user
          product_id: product.id,
        )
      end
    end

    puts 'Done Creating Reviews'

    puts "Done!"
