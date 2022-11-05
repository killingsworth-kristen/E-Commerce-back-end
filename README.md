# E-Commerce-back-end
This application allows a user to create categories and tags for products to be sold in order to maintain a database of that information.

## Installations
This application depends on node.js and MySQL to run. To get the program to run you must run <code>npm i</code> to download the necessary packages. You must also create a .env file and put in the relevant information (database name, database user, database password) in order to connect to the database. After that is complete, open a MySQL terminal and run <code>SOURCE db/schema.sql;</code>; Alternaticely, if you opened the terminal in the db directory then just run <code>SOURCE schema.sql;</code>. If you would like to use the seed data provided you can run <code>npm run seed</code> however this is not necessarily required. The last step is to start the server by running <code>node server.js</code>. After this point, you can test the application with Insomnia or another similar software.

## Usage
After you have followed the above steps, you are now ready to use the app through a software or directly in the browser at http://localhost:3001. It should be noted as there is no user interaction built into the application at this time that testing in the browser will only allow you to see data already in the database and will not allow you to add new data, update old data, or delete data. If you would like to see/use that functionality then you have to use a 3rd party software like Insomnia.
* at http://localhost:3001/api/categories you can view all categories (i.e. shirts, shorts)
  * you can also add a new category thorugh a post request by attaching a JSON body that conatins the element "category_name" (i.e. {"category_name":"accessories"})
* at http://localhost:3001/api/categories/:id you can view one category at a specific id (i.e. shirts has an id of 1)
  * you can also update a category through a put request and attaching a JSON body that conatins the element "category_name" (i.e. {"category_name":"accessories"})
  * you can also delete a category through a delete request. If you try to delete an item that doesn't exist, you will get a 404 error message back. 
* http://localhost:3001/api/products you can view all products (i.e. Plain T-Shirt)
  * you can also add a new product thorugh a post request by attaching a JSON body that conatins the elements "product_name, price, stock, category_id". Example:
  ```
  {
    "product_name": "Scarf",
    "price": 15,
    "stock": 15,
    "catergoryId":6"
  }
  ```
 * at http://localhost:3001/api/products/:id you can view one product at a specific id (i.e. Plain T-shirt has an id of 1)
   * you can also update a category through a put request and attaching a JSON body that conatins the elements "product_name, price, stock, category_id". Example:
```
  {
    "product_name": "Scarf",
    "price": 15,
    "stock": 15,
    "catergoryId":6"
  }
```
  * you can also delete a product through a delete request. If you try to delete an item that doesn't exist, you will get a 404 error message back.
* at http://localhost:3001/api/tags you can view all tags (i.e. blue, rock music)
  * you can also add a new tag thorugh a post request by attaching a JSON body that conatins the element "tag_name" (i.e. {"tag_name":"Hot Pink"})
* at http://localhost:3001/api/tags/:id you can view one tag at a specific id (i.e. blue has an id of 3)
  *  you can also update a tag through a put request and attaching a JSON body that conatins the element "tag_name" (i.e. {"tag_name":"Hot Pink"})
  * you can also delete a tag through a delete request. If you try to delete an item that doesn't exist, you will get a 404 error message back. 

Here is a video demonstration of the set up process and usage with Insomnia: https://watch.screencastify.com/v/mS5weB2r7ZjPyLsnQtes

## Credits
A massive portion of this application is start code provided to me through the UW coding bootcamp. I wrote some of the models for tags, products, and categories. Additionally, I contributed to some of the code in the index.js file in the models folder as well as most of the controller routes (category-routes.js, product-routes.js, tag-routes.js) with some small exceptions. 
