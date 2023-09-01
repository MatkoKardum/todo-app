const TaskValue = ({ task }) => {
  return (
    <span
      className={`mr-auto ${
        task.completed ? "line-through italic" : "not-italic"
      }`}
    >
      {task.value}
    </span>
  );
};
export default TaskValue;
