const User = require('../../models/User');
const UserSession = require('../../models/UserSessions');
const accountsRouter = require("express").Router();

// Sign Up
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
  //1. Verify email doesn't exist
  //2. Save
  User.find({
    email: email,
  }, (err, previousUsers) => {
    if (err) {
      res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      console.log(res);
      res.send({
        success: false,
        message: 'Error: Account already exists'
      });
    } else {
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
        message: 'Error: Invalid'
      });
    }

    const user = users[0]
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }
    //Otherwise correct user
    const userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, doc) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error'
        });
      }

      return res.send({
        success: true,
        message: 'Valid sign in',
        token: doc._id
      })
    });
  });
});

accountsRouter.get('/verify', (req, res, next) => {
  //Get the token
  const {
    query
  } = req;
  const {
    token
  } = query;

  //Verify the token is one of a kind and not deleted

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

accountsRouter.get('/logout', (req, res, next) => {
  console.log("Logout Router Hit");
  //Get the token
  const {
    query
  } = req;
  const {
    token
  } = query;

  //Verify the token is one of a kind and not deleted

  UserSession.findOneAndUpdate({
    _id: token,
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