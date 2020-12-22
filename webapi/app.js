const express = require('express');
const { join } = require('path');
const app = express();

// to serve static files
app.use('/assets', express.static(join(__dirname, 'public')));

app.get('/', (req, res) => res.send(
`
<html>
<head>
    <link href=assets/style.css type=text/css rel=stylesheet />
</head>
<body>
    <h1>.kitokip</h1>
</body>
</html>
`
));

app.get('/person/:id', (req, res) => {
    res.json({id: req.params.id});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Now listening on', PORT));
