import { useTodo } from "../Hooks/useTodo";
import { AddToDo } from "./AddToDo";
import { TodoList } from "./TodoList";

export const TodoApp = () => {  
  const {handleDeleteTodo,onToggleTodo,handleNewToDo,todos, pendingCount, toDosCount} = useTodo();

  return (
    <>
      <h1>
        Todo App: {toDosCount()} <small>Pendientes: {pendingCount()}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {todos.map((e) => (
            <TodoList
              key={e.id}
              item={e.description}
              deleteTodo={handleDeleteTodo}
              id={e.id}
              onToggleTodo={onToggleTodo}
              done={e.done}
            />
          ))}
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <AddToDo addTodo={handleNewToDo} />
        </div>
      </div>
    </>
  );
};
