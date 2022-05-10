import { GraphQLServer } from "graphql-yoga";

// Scalar type - String, Boolean, Int, Float, ID

// Type definition (Schema)
const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    title() {
      return "Book 1";
    },
    price() {
      return 10.8;
    },
    releaseYear() {
      return null;
    },
    rating() {
      return 4.6;
    },
    inStock() {
      return true;
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
