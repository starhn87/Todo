import { MdAdd } from 'react-icons/md';
import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';

type TodoInsertType = {
  onInsert: (value: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertType) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
