const { ApolloServer } = require("apollo-server-express");
const cors = require('cors')
const { typeDefs } = require("./controllers/typeDefs");
const { resolvers } = require("./controllers/resolvers");

const mongoose = require("mongoose");

const express = require("express");

startServer = async () => {
  const app = express();
  app.use(cors());
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost/eunarede", {
    useNewUrlParser: true,
  });

  app.listen({ port: 3000 }, () => {
    console.log(`Rodando na porta http://localhost:3000${server.graphqlPath}`);
  });
  
};
startServer()
