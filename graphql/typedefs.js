const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    createdAt: String!
    img: String
    username: String!
    comments: [Comment]!
    causes: [String]
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type Payments {
      id: ID!
      amount: String!
      createdAt: String!

  }
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    org: Boolean!
    email: String!
    token: String!
    username: String!
    payments: [Payments]
    createdAt: String!
  }
  input RegisterInput {
    firstname: String!
    lastname: String!
    org: Boolean!
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    uploadImage(filename: String!, id: ID!): String!
    login(username: String!, password: String!): User!
    createPost(title: String!, img:String ,body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
  }
`;
