// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const routes = require('./controllers');
// const sequelize = require('./config/connection');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });


//this is what is needed in the server for this project
const express = require('express');
const dbConnection = require('./config/connection');
const routes = require('./routes');

//set up server and the port number
const app = express();
const port = process.env.PORT || 3001;

//allowing the use of the data from response
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//calling the routes; url here is localhost:3001
app.use(routes);

//connecting to mongoDB and starting the server
dbConnection.once('open', () => {
    app.listen(port, () => {
        console.log(`Server starting on port ${port}....Now listening....`);
    });
});