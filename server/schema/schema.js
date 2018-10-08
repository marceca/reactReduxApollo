const graphql = require('graphql');
const User = require('../models/useModels');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    userPass: { type: GraphQLString },
    userMessages: { type: GraphQLString }
  })
})


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return User.findById(args.id)
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: {  type: new GraphQLNonNull(GraphQLString)},
        password: {  type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parents, args) {
        let newUser = new User({
          userName: args.name,
          userPass: args.password
        });
        return newUser.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})