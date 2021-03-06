const User = require('../../models/User');
const UserSession = require('../../models/UserSessions');
const accountsRouter = require("express").Router();
//SignUp Route ******************************************************************
accountsRouter.post('/signup', (req, res, next) => {
  const {
    body
  } = req;
  const {
    firstName,
    lastName,
    password
  } = body;
  let {
    email
  } = body;
  if (!firstName) {
    return res.send({
      success: false,
      message: 'Error: First name cannot be blank.'
    });
  }
  if (!lastName) {
    return res.send({
      success: false,
      message: 'Error: Last name cannot be blank.'
    });
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }
  console.log("signin.js")
  email = email.toLowerCase();

  //Steps:
  //Find and Verify email doesn't exist
  User.find({
    email: email,
  }, (err, previousUsers) => {
    if (err) {
      console.log("Account Router Error on SignUp Method");
      res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      console.log("Account Already Exists - SignUp Method");
      res.send({
        success: false,
        message: 'Error: Account already exists'
      });
    } else {
      console.log("Save New User - SignUp Method");
      //Save the new user
      const newUser = new User();
      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        res.send({
          success: true,
          message: 'Signed up!'
        });
      });
    }
  });
});

//SignIn Route ******************************************************************
accountsRouter.post('/signin', (req, res, next) => {
  const {
    body
  } = req;
  const {
    password
  } = body;
  let {
    email
  } = body;

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();

  //find user by email
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server Error'
      });
    }
    if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid Credentials'
      });
    }
  //validate user password
    //Wrong Password:
    const user = users[0]
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid Password'
      });
    }
    //Correct Password:
    console.log("Signing In User")
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error on Signin'
        });
      }
      //Return successful signin and create token.
      return res.send({
        success: true,
        message: 'Valid Sign In',
        token: `${doc._id}.${user.firstName}.${user.lastName}`
      })
    });
  });
});

//Verify Route ******************************************************************
accountsRouter.get('/verify', (req, res, next) => {
  //Get the token
  const {
    query
  } = req;
  const {
    token
  } = query;

  //Verify the token is one of a kind and not deleted
  console.log("Verify Token - Login Method");
  UserSession.find({
    _id: token,
    isDeleted: false
  }, (err, sessions) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      })
    }
    if (sessions.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      })
    } else {
      return res.send({
        success: true,
        message: 'Good'
      })
    }
  });
});

//Logout Route ******************************************************************
accountsRouter.get('/logout', (req, res, next) => {
  console.log("Logout Router Hit");
  //Get the token
  const {
    token
  } = req.query;
  console.log(token);

  //Find token and delete it - logout
  UserSession.findOneAndUpdate({
    _id: token.split('.')[0],
    isDeleted: false
  }, {
    $set: {
      isDeleted: true
    }
  }, null, (err, sessions) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      })
    }
    return res.send({
      success: true,
      message: 'Good'
    })
  });
});

module.exports = accountsRouter;