var mysql = require("mysql");
var inquirer = require("inquirer");

// Creates the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("connected as id "+ connection.threadId);

  connection.query("SELECT * FROM products", function(err, res) {
    if(err) throw err;
  })
});


//Displays all ithe cars available in the Dealer. 
function start(){
	connection.query('SELECT * FROM products', function(err, res){
		if (err) throw err;
		console.log('==================================================');

		for(i=0;i<res.length;i++){
			console.log('Item ID:' + res[i].item_id + ' Product Name: ' + res[i].pruduct_name + ' Price: ' + '$' + res[i].price + '(Quantity left: ' + res[i].stock_quantity + ')')
		}
		console.log('=================================================');
		placeOrder();
		})
}

//Prompts the user to place an order
function placeOrder(){
	inquirer.prompt([{
		name: 'userID',
		message: 'Please enter the ID of the car you wish to purchase.',
		validate: function(value){
			if(value){
				return true
			}
				return 'Please enter a valid Product ID'
		}
	},{
		name:'userQuantity',
		message: 'How many cars would you like to order?',
		validate: function(value){
			if(value){
				return true
			}
				return 'Please enter a numerical value'
		}
	}]).then(function(answer){
	connection.query('SELECT * FROM products WHERE item_id = ?', [answer.userID], function(err, res){
		if(answer.userQuantity > res[0].stock_quantity){
			console.log('Insufficient Quantity');
			console.log('This order has been cancelled');
			console.log('');
			newOrder();
		}
		else{
			amountOwed = res[0].price * answer.userQuantity;
			currentDepartment = res[0].department_name;
			console.log('Thanks for your order');
			console.log('You owe $' + amountOwed);
			console.log('');
      
      //updates products table
			connection.query('UPDATE products SET ? Where ?', [{
				stock_quantity: res[0].stock_quantity - answer.userQuantity
			},{
				item_id: answer.userID
			}], function(err, res){});
	
			newOrder();
		}
	})

}, function(err, res){})
};

//Asks the user to place a new order or end the connection
function newOrder(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would you like to place another order?'
	}]).then(function(answer){
		if(answer.choice){
			placeOrder();
		}
		else{
			console.log('Thank you for shopping at Bamazon!');
			connection.end();
		}
	})
};

start();
