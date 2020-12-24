const express = require('express');
const { join } = require('path');
const app = express();

/**
 * serve static files
 */
app.use('/assets', express.static(join(__dirname, 'public')));

/**
 * view engine
 */
app.set('view engine', 'ejs');

/**
 * Routes
 */

app.get('/', (req, res) => res.render('index'));

app.use('/person', require('./routers/person'));

/**
 * default error handler
 */
app.use((req, res, next) => res.status(404).json({ error: "Not Found"}))
app.use((error, req, res, next) => res.status(500).json({ error: error.message }))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Now listening on', PORT));
