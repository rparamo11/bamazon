# Bamazon

## Summary

This application is in the likes of an Amazon storefront using MySQL and a simple command line. The app will take in orders from customers and deplete stock from the store's inventory. This application is useful for a store front but can be implemented in other ways. The application has pre-stored items with a description and a price. The user then selects an item to purchase and database will let the user know if the item is available. If the item is available the database will decrement the quantity available for that specific item. 

## How to Setup

1. Clone repo to your local machine
2. Create database and tables in MySQL using the code in schema file
3. Install depedencies from package.json file, by doing "npm install"

## Customer App

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

	git clone https://github.com/rparamo11/bamazon.git
	cd bamazon
	npm install
	node bamazonCustomer.js

## Bamazon Demo
Watch the demo below. 
(https://drive.google.com/file/d/1KpPCRGxsQwW0g3UYSwpZcEzIBrJNO_U0/view?usp=sharing)

## Screenshots

1. Here I have already created our database and our javascript file. At the bottom, in the terminal I install "npm install mysql".
![Screenshot](/screenshots/bamazon1.png)

2. After installing mysql package I install "npm install inquirer". 
![Screenshot](/screenshots/bamazon2.png)

3. Here we go into our MySQL database and table we created. 
![Screenshot](/screenshots/bamazon3.png)

4. This shows our table that we created with the items (unique-id, product name,department, price and stock quantity). We will be looking at item #2. We see the 
   quantity is 2. 
![Screenshot](/screenshots/bamazon4.png)

5. Here we run our bamazonCustomer.js via NODE in the terminal to execute the application by typin "node bamazonCustomer.js"
![Screenshot](/screenshots/bamazon5.png)

6. Here we are connected to the server and the list of items populates and the 1st prompt asks us to select an item. 
![Screenshot](/screenshots/bamazon6.png)

7. Here we have selected item #2, which costs $40. Pay attention to the quantity available, which is 5. 
![Screenshot](/screenshots/bamazon7.png)

8. Our last slide shows that we have updated our MySQL database. Look at item number 2. We started with a quantity of 5 and now we have 3. 
![Screenshot](/screenshots/bamazon8.png)
