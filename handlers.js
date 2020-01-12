const { GraphQLServerLambda } = require('graphql-yoga');
const { prisma } = require('./server/context');
const { typeDefs } = require('./server/typeDefs');
const { resolvers } = require('./server/resolvers');

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers
});

exports.server = lambda.graphqlHandler;
exports.playground = lambda.playgroundHandler;
