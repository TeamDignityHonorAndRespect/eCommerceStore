require("dotenv").config();
const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require('underscore');
const massive = require("massive");
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

//middleware
const isAuthenticated = require('./middleware/isAuthenticated')

const array = ['item1', 'item2', 'item3', 'item4']

const port = 3001;

const app = express();

// app.use(express.static(`${__dirname}/../build`));  // for production use

// Connect to database
massive(process.env.URI).then(db => {
    console.log('You have successfully connected to the database.')
    app.set('db', db);
}).catch(err => console.log(err))


app.use(bodyParser.json());
app.use(cors());


//==================AUTH0====================
//==================BELOW==================== 

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.use(
    new Auth0Strategy(
      {
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK,
        scope: "openid profile"
      },
      (accessToken, refreshToken, extraParams, profile, done) => {
  
        const db = app.get('db');
        db.get_user_by_auth_id({ auth_id: profile.id }).then(results => {
          let user = results[0];
  
          if (user) {
            return done(null, user)
          } else {
            let userObj = {
              username: profile.displayName,
              auth_id: profile.id
            }
            
            db.createUser(userObj).then(results => {
              let user = results[0];
              return done(null, user)
            })
          }
        });
      }
    )
  );
  
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    const db = app.get('db');
  
    db.getUser({ id }).then(results => {
      let user = results[0];
      return done(null, user);
    });
  });
  
  app.get("/auth", passport.authenticate("auth0"));
  app.get(
    "/auth/callback",
    passport.authenticate("auth0", {
      successRedirect: "/#/",
      failureRedirect: "/#/Login"
    })
  );
  
  app.get('/auth/logout', (req, res) => {
    req.logout()
    res.redirect('/#/Login')
  });
  
  app.get("/auth/me", (req, res) => {
    if (req.isAuthenticated()) {
      return res.send(req.user);
    } else {
      return res.status(404).send("user not authenticated");
    }
  });


  //==================AUTH0==================== 
  //==================ABOVE=====================



//get random item
app.get('/random', (req, res) => res.send(_.sample(array)))

//return all items
app.get('/all', (req, res) => res.send(array))

app.get("/users", (req, res) => {
    app
        .get("db")
        .getAllUsers()
        .then(users => {
            res.status(200).json(users);
        });
});

// app.get("/api/createUser", (req, res) => {
//     app
//         .get("db")
//         .createUser()
//         .then(response => {
//             res.status(200).json(response);
//         });
// });

// const path = require("path");  //for production use
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});