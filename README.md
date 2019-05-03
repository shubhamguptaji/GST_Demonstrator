# GST Demonstrator

This web app allows you to calculate the final price of an item after adding GST to the initial price.
Provide the app with name of the item, GST percentage and initial price of the item. It will calculate the final price of that item.
The items are saved to the database. You can see the List in All Items section. There is a Pie-chart section which shows various GST Slab percentages.

## Run the App

- First Clone the Web app `git clone http://github.com/shubhamguptaji/GST_Demonstrator` and then `cd GST_Demonstrator`
- To Run Backend Server:
  - First `cd backend`
  - Install all the dependencies `npm install`
  - Run the server `npm start`
- To Run Frontend part:

  - Move to frontend directory `cd frontend`
  - Install the dependencies `npm install`
  - Run the development server by `npm start` or open the `index.html` file in `frontend/public/` directory.

### Libraries/API Used

- Maths.js - `http://api.mathjs.org/v4/` api is used to calculate the GST.

- React-vis - A data visualization library by Uber is used for generating Pie Chart.
