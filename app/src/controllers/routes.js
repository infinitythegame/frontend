module.exports = function routes(app, router, require) {
    'use strict';
    var factions = require('controllers/factionController')(router);
    app.use('/factions', factions);
    //app.use('/', require('controllers/indexController')(router));

    console.log('controllers loaded');
};
