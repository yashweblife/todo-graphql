import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";

const GET_TODOS = gql`
  query {
    todos {
      id
      text
      completed
    }
  }
`;

const ADD_USER = gql`
  mutation AddUser ($user: AddUserInput!) {
    addUser(name: $user) {
      id
      name
    }
  }
`;

function App() {
  const [addUser, {data, loading, error}] = useMutation(ADD_USER)
  useEffect(()=>{addUser({
    variables: { user:{name: "Yash"} }
  })},[])
  if(error) return <p>Error: {error.message}</p>
  if(loading) return <p>Loading...</p>
  if(data){
    console.log(data)
  }
  return (
    <div className="App">
      <div>
       
      </div>
    </div>
  )
}

export default App
