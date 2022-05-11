import { GraphQLServer } from "graphql-yoga";

// Scalar type - String, Boolean, Int, Float, ID

// Type definition (Schema)
const typeDefs = `
  type Query {
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "123",
        name: "Robin",
        email: "robin@gmail.com",
      };
    },
    post() {
      return {
        id: "1234",
        title: "New post",
        body: "Post body",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up!");
});
