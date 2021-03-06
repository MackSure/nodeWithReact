const passport = require('passport');

module.exports = function (app) {
    app.get('/auth/gitlab', passport.authenticate('gitlab', {
        scope: ['api']
    }));
    app.get('/auth/gitlab/callback', passport.authenticate('gitlab'), (req, res) => {
        res.redirect('/surveys');
    });

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.redirect('/');
    });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
