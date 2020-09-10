//import statements
const express = require('express');
const connectDB = require('./config/db');

//initialize expess in variable named app
const app = express();
connectDB();

//test api
app.get('/', (req, res) => res.json({ msg: 'api running' }));

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

//look for environment variable named PORT (specially using for production build)
const PORT = process.env.PORT || 5000;

//starting a server
app.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`));
