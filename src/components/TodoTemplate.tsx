import React, { ReactNode } from 'react';
import './TodoTemplate.scss';

type TodoTemplateType = {
  children: ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateType) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
