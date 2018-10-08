let express = require('express');
let app = express();
let fs = require('fs');
let path = require('path');

// Graphql
let graphqlHTTP = require('express-graphql');
let schema = require('./schema/schema')

// Mongooose
let mongoose = require('mongoose');

mongoose.connect('mongodb://wasp:pass1234@ds123783.mlab.com:23783/waspqluserdb', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('connected to DB')
})

app.use(express.static(path.join(__dirname + '/../dist')))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
  })
)

app.listen(3000, console.log(' listening on port 3000'))