# Tapa-Design

Tapa-Design, a clone of e-commerce website Topo-designs. Topo specializes in outdoor wear and gear.

Live Link: [TapaDesign](https://tapadesign.onrender.com)
_________________________________________________________________________________________________________________________________________________________



# Features

### User Authentication

  - Users can create an account or log in with a Demo user account", providing access to all the application's features
<img width="795" alt="Screenshot 1" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/2375e71d-98a8-4ada-8992-f6613d79f41f">

<img width="795" alt="Screenshot" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/9684e2ba-2f9f-4015-bbc2-57a860c97723">
____________________________________________________________________________________________________________________


### Product Browsing: 

  -  Navigate through a diverse range of products, filtered by categories, or search for specific items to find exactly what you're looking for.
  
<img width="521" alt="Screenshot 2" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/e31a3d18-a695-483f-95c0-f935a985b034">
<img width="521" alt="Screenshot 3" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/b49ab2e2-4a1d-45df-b13a-abbf82c2c9eb">

____________________________________________________________________________________________________________________

### Shopping Cart:
  - Where you can view the subtotal and proceed to checkout.
<img width="499" alt="Screenshot 4" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/ee3e152e-51d0-45a1-8594-b7d4bbd1163e">
<img width="499" alt="Screenshot 5" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/b5b40cb8-35e2-4db7-b7da-dc6006ca611a">
____________________________________________________________________________________________________________________

### Product Reviews:  
  - Love an item? Or perhaps the quality didn't meet your expectations? Feel free to share your thoughts on any item in our collection.

<img width="1063" alt="Screenshot 6" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/7c7a42aa-0a34-4756-80d5-c2ad94299b52">
<img width="1488" alt="Screenshot 7" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/9009d63a-faea-4256-82f5-6fa134fe5d21">

____________________________________________________________________________________________________________________

### Let's Dig In!
<details>
  <summary>User Authentication</summary>

  - Utilizes Ruby on Rails on the backend with the bcrypt gem to provide secure and encrypted user registration and login.
  - Ensures data privacy and security through robust authentication and authorization mechanisms.
    <img width="668" alt="Screenshot 8" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/e766fb9a-a70c-4ab2-aea8-a944bba483fc">
    <img width="688" alt="Screenshot 9" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/989c2364-a087-4c50-9b02-2d75c5536154">
_________________________________________________________________________________________________________________________________________________________

</details>
<details>
  <summary>Product Browsing:</summary>

  - Utilizes ActiveRecord's scope feature in Ruby on Rails to create reusable and chainable query methods for searching products based on name, description, or category.
  - Enhances code modularity and readability by abstracting complex SQL queries into concise, self-explanatory methods that can be easily invoked in controllers.
    <img width="1352" alt="Screenshot 10" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/b3853596-5113-4f01-931a-4e3a5ebed446">
    <img width="588" alt="Screenshot 11" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/0262dcad-2238-4d5c-ae87-42bb573ea6a4">

  - Implementing a flexible search functionality that fetches either all products or filters products based on a user's query, seamlessly integrating with the Redux store for state management.
    <img width="1352" alt="Screenshot 12" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/04838013-eac4-4385-b97a-ebec62ab81f2">
_________________________________________________________________________________________________________________________________________________________

  
</details>
<details>
  <summary>Cart Items:</summary>

  - Implementing an intelligent cart item creation process in Ruby on Rails that checks for existing items with the same options in the user's cart, either incrementing the quantity or creating a new cart item as needed.
    <img width="1352" alt="Screenshot 13" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/f9034f8a-5ac1-4ca3-8ed5-40fc0c1574bf">

  - Utilizes Redux Thunk and CSRF-protected fetch to asynchronously create a new cart item in the backend, updating the Redux store upon successful creation.
    
    <img width="588" alt="Screenshot 14" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/cb2a6b75-2cea-4351-91cd-1b843e1e724f">


_________________________________________________________________________________________________________________________________________________________


</details>
<details>
  <summary>Reviews:</summary>

  - Utilizes Jbuilder to serialize review data, including its attributes and the first name of the author, to be sent as a JSON response from the Rails backend.
    
    <img width="844" alt="Screenshot 15" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/8e1e7de3-d022-4307-8b29-524c1739c986">

  - Implements a RESTful API for reviews with CRUD operations, allowing users to create, read, update, and delete reviews. Access to certain actions is restricted to logged-in users.
  - Utilizes conditional logic in the index action to fetch reviews either by product ID or user ID, offering flexible data retrieval options.
    
    <img width="776" alt="Screenshot 16" src="https://github.com/montejododger/Tapa-Designs/assets/106104519/0ec7e03d-06b6-4d0d-aa22-3c27440d4c17">

    

</details>

_________________________________________________________________________________________________________________________________________________________
### Installation 

1. Clone the repository:
    - `git clone (https://github.com/montejododger/Tapa-Designs.git)`
  
2. Install the required dependencies:
    - `cd tapas-design`
    - `bundle install`
    - `npm install`

3. Set up the database:
    - `rails db:create`
    - `rails db:migrate`
    - `rails db:seed`

4. Start the Rails server:
    - `rails s`

5. Open a new terminal window and start the React development server:
    - `cd frontend`
    - `npm install`
    - `npm start`

6. Visit http://localhost:3000 in your browser to explore the app locally.
_________________________________________________________________________________________________________________________________________________________


### Technologies Used

- Backend: Ruby on Rails
- Frontend: React, Redux, JavaScript, HTML5, CSS3
- Database: PostgreSQL
- Image Hosting: Amazon S3
- Deployment: Render

_________________________________________________________________________________________________________________________________________________________

### Future Features
  - Have a user profile slide out much like the cart
  - Allow users to favorite products and have their favorites show up on their profile page
