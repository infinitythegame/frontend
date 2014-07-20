module.exports = function indexController(router) {
    'use strict';
    router.get('/', function (req, res) {
        res.render('index', {
          title: 'Main page'
        });
    });
};
