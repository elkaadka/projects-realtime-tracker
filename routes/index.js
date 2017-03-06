
module.exports = function(app) {
  app.get('/', function(req, res,next) {
      res.render('index');
  });

  app.get('/settings', function(req, res,next) {
      res.render('settings', {helper: 'settings'});
  });

  app.get('/tracking', function(req, res,next) {
      res.render('tracking', {helper: 'tracking'});
  });

  app.get('*', function(req, res){
      res.status(404).render('page404');
  });
}
