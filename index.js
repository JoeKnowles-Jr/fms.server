const express = require('express');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();
const Authentication = require('./controllers/authentication');
require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const corsOptions = { origin: 'http://localhost:3000' };

// db setup
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// app setup
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "hello" });
});

app.post('/users/authenticate', requireSignin, Authentication.signin);
app.post('/users/signup', Authentication.signup);

app.use('/senators', require('./routes/senator.routes'));
app.use('/representatives', require('./routes/representative.routes'));
app.use('/governors', require('./routes/governor.routes'));
app.use('/states', require('./routes/state.routes'));
app.use('/comments', require('./routes/comment.routes'));

// server app
const server = http.createServer(app);
server.listen(5000);
