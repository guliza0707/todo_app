
import './App.css';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'

function App() {
  async function fetchTodos() {
   
   let response = await API.graphql({
      query: queries.listTodos
    });
      console.log(response);
  }

  async function createTodo(){
    let myTodo = {
      name: "Todo 3",
      description: "some descr"
    };

    let response = await API.graphql({
      query: mutations.createTodo,
      variables: {
        input: myTodo
      }
    });

    console.log(response);

  }
  return (
    <div>
      <h1>Hello world!</h1>
        <p>version 2</p>
        <button onClick={fetchTodos}>Fetch todo</button>
        <button onClick={createTodo}> Create todo</button>
      </div>
    
  );
}

export default App;
