require('dotenv').config();
const port = process.env.PORT || 8000;
const clientURL = process.env.CLIENT_URL || 'http://localhost:3000';
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.DATABASE_CLOUD || `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASSWORD }@react-node-aws.cjrru.mongodb.net/${ process.env.DB_NAME }-${ env }?retryWrites=true&w=majority`;
const secret = process.env.SECRET || 'I bet you never even look at this!';
const dbOpt = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

module.exports = {
  port,
  clientURL,
  env,
  secret,
  dbURI,
  dbOpt
};