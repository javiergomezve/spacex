const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const schema = require('./schema');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static('public'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started http://127.0.0.1:${PORT}`));
