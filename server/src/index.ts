import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
const todos = [
    {
        id: "1",
        text: "Learn GraphQL",
        completed: false
    },
    {
        id: "2",
        text: "Learn React",
        completed: false
    },
    {
        id: "3",
        text: "Learn Apollo",
        completed: false
    }
]
const users = [{
    id:"1",
    name:"John"
}]
const resolver = {
    Query:{
        todos:()=>todos,
        todo:(_, {id})=>{
            return todos.find((todo) => todo.id === id)
        },
        users:()=>users
    },
    Mutation:{
        addUser:(_,{name})=>{
            const user = {
                id:Math.floor(Math.random()*1000).toString(),
                ...name
            }
            console.log(user)
            users.push(user)
            return user
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers:resolver
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})
console.log(`🚀 Server ready at: ${url}`)