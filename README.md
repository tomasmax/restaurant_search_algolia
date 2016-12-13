This is the solution to the hiring assignment for the Solutions team at Algolia.

I used npm, gulp, bootstrap and instantsearch.js by Algolia to develop a restaurant search demo.

In order to create `final_restaurants.json` file mixing all the data from `restaurants_list.json` and `restaurants_info.csv` I implemented a Ruby script.

If you want to run the script you need to have ruby 2.3.2 installed and run in `resources/dataset/` folder

`ruby mix_data.rb` 

## Local Setup
Having npm installed, type in your terminal:

1. `npm install`
2. `gulp sass`
3. `gulp`

## Access to dev or prod deploy
1. On your local server, visit http://localhost:3000 after local setup
2. Visit http://www.tomasmadariaga.com/restaurant_search_algolia/ on your browser to see production deployment