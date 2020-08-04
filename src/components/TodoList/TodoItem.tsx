import React from "react";

type Props = {
  id: number;
  title: string;
  completed: boolean;
  toggler: () => void;
};

const TodoItem: React.FC<Props> = ({ title, completed, toggler }) => {
  return (
    <div
      onClick={toggler}
      className={`todo-item ${completed ? "completed" : ""}`}
    >
      <p>{title}</p>
    </div>
  );
};

export default TodoItem;
