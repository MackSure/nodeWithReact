const passport = require('passport');
const GitLabStrategy = require('passport-gitlab2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    });
});

passport.use(new GitLabStrategy({
    clientID: keys.gitlabClientID,
    clientSecret: keys.gitlabClientSecret,
    callbackURL: '/auth/gitlab/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({gitlabId: profile.id}).then((existingUser) => {
       if (!existingUser) {
           // we don't have a user record with this ID, make a new record;
           new User({gitlabId: profile.id}).save().then(user => {
               done(null, user);
           });
       } else {
           // we already have a record with the given profile ID;
           done(null, existingUser);
       }
    });

}));