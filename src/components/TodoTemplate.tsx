import React, { ReactNode } from 'react';
import styles from './TodoTemplate.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

type TodoTemplateType = {
  children: ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateType) => {
  return (
    <div className={cx('TodoTemplate')}>
      <div className={cx('app-title')}>일정 관리</div>
      <div className={cx('content')}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
