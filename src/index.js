const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query{
        info:String!
        users: [User!]!
        user(id:ID!): User
        feed: [Link!]!
        link(id: ID!): Link
    }

    type Mutation {
        createUser(name:String!): User!
        post(url:String!, description:String!): Link!
        updateLink(id:ID!, url:String!, description: String!): Link
        deleteLink(id: ID!): Link
    }

    type User{
        id: ID!
        name: String!
    }

    type Link {
        id: ID!
        description: String!
        url: String!
    }
`

let links = [
    {
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Full stack tutorial for GraphQL'
    }
]


let idCount = links.length

const resolvers = {
    Query:{
        info: () => `This is String`,
        feed: () => links,
    },

    Mutation: {
        post:(parent, args, context, info) => {
            const link = {
                id: `link-${idCount ++ }`,
                description: args.description,
                url: args.url
            }

            links.push(link);
            return link;
        },
        deleteLink: (parent, args, context, info) => {
            return {
                id: `link-0`,
                url:`www.baidu.com`,
                description: `baidu`
            };
        }
    }
}


const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start().then(() => {
    console.log(`Server is running on http://localhost:4000`);
})
