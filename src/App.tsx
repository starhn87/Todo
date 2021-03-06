import React, { useRef, useCallback, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

export type TodoType = {
  id: number;
  text: string;
  checked: boolean;
};

const createBulkTodos = () => {
  const arr = [];
  for (let i = 0; i < 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return arr;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(newTodo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
