import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';
import styles from './TodoInsert.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

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
    <form className={cx('TodoInsert')} onSubmit={onSubmit}>
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
