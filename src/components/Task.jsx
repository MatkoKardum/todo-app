import TaskValue from "./TaskValue";
import TaskOptions from "./TaskOptions";

const Task = ({ task, enableEditTask, completeTask, deleteTask }) => {
  return (
    <div
      className={`w-full flex items-center rounded-md p-4 ${
        task.completed
          ? "bg-green-100 border-2 border-green-200 drop-shadow-md"
          : "bg-white border-2 border-green-200"
      }`}
      key={task.id}
    >
      <TaskValue task={task} />

      <TaskOptions
        task={task}
        enableEditTask={enableEditTask}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};
export default Task;
