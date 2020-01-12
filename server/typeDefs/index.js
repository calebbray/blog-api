module.exports.typeDefs = `
  type Query {
    posts(query: String): [Post!]!
    post(id: String!): Post!
  }

  type Post {
    id: String!
    title: String!
    body: String
    published: Boolean!
  }
`;
