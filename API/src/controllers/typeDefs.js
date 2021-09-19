const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Player {
    _id: ID!
    name: String!
    gols: String!
    team: String!  
  }
  type Query {
    hello: String,
    players: [Player]
  },
  type Mutation {
    insertPlayer (name: String!, team: String!, gols: String!): Player
  }
`;