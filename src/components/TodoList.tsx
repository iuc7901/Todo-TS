import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completdTodos: Todo[];
  setCompletdTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completdTodos,
  setCompletdTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div className="todos" ref={provided.innerRef}{...provided.droppableProps}>
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo,index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">  
      {(provided)=>(
        <div className="todos remove" ref={provided.innerRef}{...provided.droppableProps}>
        <span className="todos__heading">Completed Tasks</span>
        {completdTodos.map((todo,index) => (
          <SingleTodo
          index={index}
            todo={todo}
            key={todo.id}
            todos={completdTodos}
            setTodos={setCompletdTodos}
          />
        ))}
        {provided.placeholder}
      </div>
      )}
      
      </Droppable>
    </div>
    // <div className='todos'>
    //   {todos.map((todo)=>(
    //    <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
    //   ))}
    // </div>
  );
};

export default TodoList;
