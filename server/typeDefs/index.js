module.exports.typeDefs = `
  type Query {
    posts(query: String): [Post!]!
    post(id: String!): Post!
    skills(query: String): [Skill!]!
    skill(id: String!): Skill!
  }

  type Mutation {
    createPost(data: CreatePostInput!): Post!
    updatePost(id: String!, data: UpdatePostInput!): Post!
    deletePost(id: String!): Message!
  }

  type Post {
    id: String!
    title: String!
    body: String
    published: Boolean!
    tags: [Tag!]
  }

  type Tag {
    id: String!
    tagName: String!
    posts: [Post!]!
  }

  type Skill {
    id: String!
    name: String!
    rating: Float!
    description: String!
    iconLink: String!
    links: [String!]!
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
