module.exports.typeDefs = `
  type Query {
    posts(query: String): [Post!]!
    post(id: String!): Post!
  }

  type Mutation {
    createPost(data: CreatePostInput): Post!
    updatePost(id: String!, data: UpdatePostInput): Post!
    deletePost(id: String!): Message!
  }

  type Post {
    id: String!
    title: String!
    body: String
    published: Boolean!
  }

  type Message {
    message: String!
  }

  input CreatePostInput {
    title: String!
    body: String
    published: Boolean
  }

  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
  }
`;
