Welcome to Budget-Buddy.
The current app is based on the idea that we regularly plan to eat with our friends and roommates who have different budgets. 
Deciding which restaurant to eat at becomes a task in which we have to look through menus to see the price. Here we want to budget plan our
meal so we made a rest API using node.js for backend and express.js for middleware to show our concept of the app. One can add budget for friends and based on that our backend calculates the average budget which later is used to get restaurants from Zomato API, we are using Zomato.
since Yelp doesn't provide price ranges. Later to show our backend working we have built a single page in HTML and javascript which uses google map API and any charts to show the places on the map and price bar graph of the places so that it is easy to decide. To run the app. 

# budget-buddy
Make a new directory. 
navigate that directory

$cd /yourDirectory
$git clone https://github.com/latishk/Budget-Buddy.git

make sure that you are in Budget-Buddy directory
install node package manager 

$ npm install --save

run the node app


$node app.js

go to your chrome browser and go to page http://localhost:3000/ to see the app running.
add prices for each user, for every user click on add price and then click on get restaurants. 


