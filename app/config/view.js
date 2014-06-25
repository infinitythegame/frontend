'use strict';
var cons     = require('consolidate', name = 'hogan');

app.engine('html', cons[name]);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '../views');

cons[name]('views/page.html', { user: 'tobi' }, function(err, html){
  if (err) throw err;
  console.log(html);
});
