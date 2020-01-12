module.exports.resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'world'}`
  }
};
