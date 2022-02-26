//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
var _ = require('lodash');
const ejs = require("ejs");
const mongoose=require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("/partial/header.ejs");
const $ = require('jquery')(dom.window);
var login_value=false;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate=require('mongoose-findorcreate');
const app = express();
const regionalFoodItems=require("./RegionalFoods.js");
app.use(session({
  secret:"this is secret",
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect("mongodb+srv://orderof3:Terrific%40trio@diethard.sjjzz.mongodb.net/Diet_Hard?retryWrites=true&w=majority");
const userSchema=new mongoose.Schema({
  name:String,
  email: String,
  password: String,
  googleId:String,
  cuisine: String,
  height: Number,
  weight: Number,
  age: Number,
  gender: String,
  allergens: Array,
  bmr:Number,
  pdct:Number,
  activitylevel: String,
  goal:String,
  split:String,
  protein:Number,
  carbohydrate:Number,
  fat:Number,

});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
// requires the model with Passport-Local Mongoose plugged in
const User = new mongoose.model("User",userSchema);

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(function(user,done){
  done(null,user.id);
});
passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user)
  {
    done(err,user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret:  process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/DietHard",
  //  userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
},

function(accessToken, refreshToken, profile, cb) {
  console.log(profile);
  User.findOrCreate({ googleId: profile.id,name:profile.displayName }, function (err, user) {
    return cb(err, user);
  });
}
));


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/auth/google",passport.authenticate('google',{scope:["profile"]}));
app.get('/auth/google/DietHard', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  //Home
app.get("/",function(req,res){
 
res.render("home",{login_value:req.isAuthenticated()});
});

  //Register

app.post("/register",function(req,res){
        
    User.register({split:"",name:req.body.name,weight:null,height:null,age:null,email:req.body.username,username:req.body.username,goal:"",activitylevel:"",cuisine:"",gender:"",allergens:[], active: false}, req.body.password, function(err, user) {
    if (err) { console.log(err);
    res.redirect("/");}
    else{
      passport.authenticate("local")(req,res,function(){
        
  res.redirect("/profile");
  });
  }
  });
  });
  //Login
  
  app.post("/login",function(req,res){
  const user=new User({
    username:req.body.username,
    password:req.body.password
  });
  
  req.login(user,function(err){
    if(err){
      console.log(err);
      }
      else{
        passport.authenticate("local")(req,res,function(){
          
          res.redirect("/profile");
        })
      }
  })
  });

  //Diary


  app.get("/diary",function(req,res){
    if(req.isAuthenticated()){
        
      res.render("diary",{login_value:req.isAuthenticated()});
    }
    else{
      res.redirect("/");
    }    
      
    });


    //Goals
    app.get("/goal",function(req,res){
      if(req.isAuthenticated()){
        
        res.render("goal",{login_value:req.isAuthenticated(),protein:req.user.protein,carbohydrate:req.user.carbohydrate,fat:req.user.fat});
      }
      else{
        res.redirect("/");
      }    
      
      });

    //Logout
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
  
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  