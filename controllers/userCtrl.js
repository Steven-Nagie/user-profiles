var users = [
  {
    name: 'Steven Nagie',
    password: 'password1',
    friends: ['steven nage', 'stevenalbertnagie']
  },
  {
    name: 'a',
    password: 'a',
    friends: ['a','b','c']
  },
  {
    name: 'Ryan Rassmussen',
    password: '#$#@$',
    friends: ['lindsey lohan']
  },
  {
    name: 'alberto',
    password: '3908oiun5',
    friends: ['several', 'good', 'friends']
  }
];

module.exports = {
  login: function(req, res, next) {
      user = users.filter(function(user) {
        if (user.name === req.body.name) {
          return user.password === req.body.password;
        }
      });
      // console.log(user);
      if (user[0]) {
        req.session.currentUser = user[0];
        console.log(req.session.currentUser);
        res.send({
          userFound: true,
          currentUser: req.session.currentUser
        });
      } else {
        res.send({userFound: false});
      }
  },

};
