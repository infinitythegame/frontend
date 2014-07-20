module.exports = function factionController(factionsRouter) {
    'use strict';
    console.log('here');
    factionsRouter.get('/', function getFactions(req, res, next) {
        res.render('factions', {
          title: 'Factions',
          factions: [
            {
              name: "Ariadna",
              link: "/factions/ariadna",
              id: "ariadna"
            },
            {
              name: "Aleph",
              link: "/factions/aleph",
              id: "aleph"
            },
            {
              name: "Haqqislam",
              link: "/factions/haqqislam",
              id: "haqqislam"
            }
          ]
        });
    });
    return factionsRouter;
};
