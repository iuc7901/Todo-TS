import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completdTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todos);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add,
      active = todos,
      complete = completdTodos;

      if(source.droppableId==="TodosList"){
        add=active[source.index]
        active.splice(source.index,1)
      }else{
        add=complete[source.index]
        complete.splice(source.index,1)
      }

      if(destination.droppableId==="TodosList"){
        active.splice(destination.index,0,add)
      }else{
        complete.splice(destination.index,0,add)
      }

      setCompletedTodos(complete);
      setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completdTodos={completdTodos}
          setCompletdTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
function each(each: any): React.ReactNode {
  throw new Error("Function not implemented.");
}
