import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';
import { TodoType } from '../App';

export type TodoListType = {
  todos: TodoType[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoList = ({ todos, onRemove, onToggle }: TodoListType) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
