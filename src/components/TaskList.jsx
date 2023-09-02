import Task from "./Task";

const TaskList = ({ tasks, enableEditTask, completeTask, deleteTask }) => {
  return (
    <div className="flex gap-2 flex-wrap mt-2 max-h-[400px] overflow-auto p-2 text-2xl">
      {tasks.map((task) => (
        <Task
          task={task}
          enableEditTask={enableEditTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
          key={task.id}
        />
      ))}
    </div>
  );
};
export default TaskList;
