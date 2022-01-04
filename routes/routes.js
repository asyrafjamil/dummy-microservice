const publicRoutes = require('./publicRoutes');
const protectedRoutes = require('./protectedRoutes');

module.exports = (app, express) => {
  app.use('/', publicRoutes(app, express));
  app.use('/', protectedRoutes(app, express));
};
