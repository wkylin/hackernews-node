const { GraphQLServer } = require('graphql-yoga');


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
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start().then(() => {
    console.log(`Server is running on http://localhost:4000`);
})
