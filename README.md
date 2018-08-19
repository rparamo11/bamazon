# Bamazon

## Summary

This application is in the likes of an Amazon storefront using MySQL and a simple command line. The app will take in orders from customers and deplete stock from the store's inventory. This application is useful for a store front but can be implemented in other ways. The application has pre-stored items with a description and a price. The user then selects an item to purchase and database will let the user know if the item is available. If the item is available the database will decrement the quantity available for that specific item. 

### How to Setup

1. Clone repo to your local machine
2. Create database and tables in MySQL using the code in schema file
3. Install depedencies from package.json file, by doing "npm install"

#### Customer App

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

	git clone https://github.com/rparamo11/bamazon.git
	cd bamazon
	npm install
	node bamazonCustomer.js

##### Bamazon Demo
Watch the demo below. 
[Bamazon Demo]

###### Screenshots
![Screenshot](/screenshots/bamazon1.png)

![Screenshot](/screenshots/bamazon2.png)

![Screenshot](/screenshots/bamazon3.png)

![Screenshot](/screenshots/bamazon4.png)

![Screenshot](/screenshots/bamazon5.png)

![Screenshot](/screenshots/bamazon6.png)

![Screenshot](/screenshots/bamazon7.png)

![Screenshot](/screenshots/bamazon8.png)