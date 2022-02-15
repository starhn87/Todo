import React, { CSSProperties } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { TodoType } from '../App';
import styles from './TodoListItem.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

type TodoListItemType = {
  todo: TodoType;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  style: CSSProperties;
};

const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
  style,
}: TodoListItemType) => {
  const { id, text, checked } = todo;

  return (
    <div className={cx('TodoListItem-virtualized')} style={style}>
      <div className={cx('TodoListItem')}>
        <div
          className={cx('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className={cx('text')}>{text}</div>
        </div>
        <div className={cx('remove')} onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
