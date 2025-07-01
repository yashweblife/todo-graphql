export const typeDefs = `#graphql
    type Todo {
        id: ID!
        text: String!
        completed: Boolean!
        user: User
    }
    type User {
        id: ID!
        name: String!
    }
    type Query {
        todos: [Todo]
        todo(id: ID!): Todo
        users: [User]
        user(id: ID!): User
    }
    input AddUserInput {
        name: String!
    }
    type Mutation {
        addUser(name: AddUserInput!): User
        addTodo(text: String!): Todo
    }
`