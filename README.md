#### The Live Demo for our project - https://www.loom.com/share/1f317932086a4252a17842444cf0f849

#Our First Hackathon as Freshers
#Team Details
Team Name :Terrific Trio
IsFresher:True


# Get Started

How to start the website:-
In the project directory, you can run:

`npm i`
This will install all required node modules.

then you can run,

`node app.js`
This will start the website on local server port 3000.

Using nodemon is recommended if you are a developer.

Now open `http://localhost:3000` to view it in the browser.

The page will reload if you make edits.
This might not run from the repo as .env is ignored.
You can generate your Google Client Id and Google Client Secret and put it in .env file and the project will run perfectly.


# The Problem Die.t_HARD solves 

### People belonging to the Indian middle-aged urban demographic, are more often than not, unable to choose and maintain their diet plan resolutions to achieve personal fitness goals which leads them to stop making conscious effort on their diet altogether and relapsing back to their previous unhealthier diet.

One of the main reason why they are unable to formalize a meal plan is a lack of simple and relatable resource for forming their meal plans. Most of the online resources which aid the formation of personalized diet plans for its users , are framed to be only useful for foreign markets and not for India, as the meals in the daily routine barely contain ingredients that the regional market is familiar with.

There are other applications that do contain Indian foods however the scope of variety of food is very limited which, again leaves the above mentioned demographic back to square one.


# The Idea 
### Here at die.t_hard , all the meal prep plans are heavily personalized and customizable to make sure the Indian user attains his/her fitness goals by utilizing local Indian food items for its users  . Not only that it also provides basic lessons which would be useful for its users .

The solution that we came up with is to make a website which provides a simple UI so that the users do not feel intimidated and to integrate food items that any Indian middle aged demographic is familiar with.

The key focus of thought for our website is that we understand the diversity of Indian cuisines and how intimately the cultural identity of each and every region is tied up with its cuisines and food .

Thus, we have categorized the Indian dishes into local,  regional dishes. The user can choose from a wide variety of dishes of his/her own preferred locality (Maharastrian , Kashmiri, Goan etc) and the algorithm sets up their meal plan amongst the chosen category with caloric and macronutrient constraints. We have also added a food and exercise diary where user can manually input their desired food item or exercises and which will be analysed, from which the user can track their progress anytime, daily, weekly , monthly etc ???like a diary.


# How it works .

1. The user should be accustomed with the basics of how to go about making a meal plan with the basic understanding of calories , nutrients , BMR and portion sizes . Hence there is a dedicated lesson page which conveys all this info to its users in the lessons tab which the user can refer to anytime .

2 . Don't like the daily meal plan the algorithm has set up? Don't worry,the daily meal plan can be customized any time where you can choose food from any locality and add any dish according to your liking!

3 . Our rating system teaches us about your liking so we can improve our recommendations. 

4 . Whether it's due to diet requirements, limited time for cooking, or just a desire to keep things simple, recurring dishes allow you to put your favorite foods and meals on repeat.


# Tech Behind it

### frontend
1. HTML, CSS, Bootstrap for layout and styling.
2. EJS for embedding Javascript
3. JavaScript and JQuery for adding client side functionalities

### backend 
1. NodeJS and Express.js . to create server-side logic for the website and create server routes.
2. MongoDB Atlas is used as database.
3. OAuth 2.0 (Passport.js). For user authentication. 

### API
1. fatSecret Javascript API. used for user personalized diary section.

### Research Paper utiised to get nutrient data for the Indian North East region.
1. As easily available data for food in the north east region is scarce , we utilised the content and findings of the following research paper to retrieve the data for the assamese cuisine in RegionalFoods.js 

[Nutrient_Composition_of_Some_Regional_Recipes_of_A.pdf](https://github.com/agarwalvinit5678/Diet_Hard/files/8147817/Nutrient_Composition_of_Some_Regional_Recipes_of_A.pdf)


![Screenshot_79](https://user-images.githubusercontent.com/96020697/155879666-904b047e-801a-4c4a-9d02-fd7c2280d2d7.png)
![Screenshot (84)](https://user-images.githubusercontent.com/92209640/155890269-ee02c6d7-fd78-44c6-809f-9498ef093299.png)
![Screenshot (80)](https://user-images.githubusercontent.com/92209640/155890285-bd31946b-9f35-407d-9d58-8383aa68c9ec.png)
![Screenshot_81](https://user-images.githubusercontent.com/96020697/155879691-6a651fb7-153a-40eb-a225-3c150b2134ed.png)
![Screenshot_82](https://user-images.githubusercontent.com/96020697/155879702-3e9bad58-a1a7-45eb-9a40-abd381d149b2.png)




