const graphql = require('graphql');
const User = require('../models/userModels');
const Message = require('../models/messageModel');

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
    userPass: { type: GraphQLString }
  })
})

const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: GraphQLID },
    message: { type: GraphQLString }
  })
})


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return User.findById(args.id);
      }
    },
    getUsers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
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
    },
    addMessage: {
      type: MessageType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID)},
        message: { type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parents, args) {
        let newMessage = new Message({
          userId: args.userId,
          message: args.message
        })
        return newMessage.save();
      }
    }
  }
})

const Subscribe = new GraphQLObjectType({
  name: 'Subscribe',
  fields: {
    type: UserType,
    args: {
      name: {  type: new GraphQLNonNull(GraphQLString)},
      password: {  type: new GraphQLNonNull(GraphQLString)}
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
  subscription: Subscribe
})