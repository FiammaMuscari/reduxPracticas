import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/slices/todos';



export const TodoApp = () => {

  // const { data: todos, isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId( todoId + 1 );
  }

  const prevTodo = () => {
    if( todoId === 1 ) return;
    setTodoId( todoId - 1 );
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />

      <h4>isLoading... {isLoading ? 'True' : 'False'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        { todos.map( todo => (
          <li key={ todo.id }>
            <strong>{ todo.completed ? 'DONE' : 'PENDING' }</strong>{ todo.title }
          </li>
        )) }
      </ul> */}

      <button
        onClick={ prevTodo }
      >
        Previous todo
      </button>

      <button
        onClick={ nextTodo }
      >
        Next todo
      </button>
    </>
  )
}