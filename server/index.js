require("dotenv").config();
const jwt = require("jsonwebtoken");

const { ApolloServer } = require("apollo-server");
const typeDefs = require("../src/typeDefs");
const resolvers = require("../src/resolvers");

const { prisma } = require("../src/generated/prisma-client/index");

const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, process.env.SECRET_KEY);
    }
    return null;
  } catch (err) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || "";
    const token = tokenWithBearer.split(" ")[1];
    const user = getUser(token);

    return {
      user,
      prisma // the generated prisma client if you are using it
    };
  }
});

server
  .listen({
    port: 8383
  })
  .then(info => console.log(`Server started on http://localhost:${info.port}`));
