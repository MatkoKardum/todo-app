const TasksFilter = ({ tasks, displayTask, setDisplayTask }) => {
  return (
    <div className="flex justify-center gap-5">
      <button
        className="px-4 py-2 border-2 border-green-200 rounded-md"
        onClick={() => {
          setDisplayTask(tasks);
        }}
      >
        All
      </button>
      <button
        className="px-4 py-2 border-2 border-green-200 rounded-md"
        onClick={() => {
          setDisplayTask(tasks);
          setDisplayTask((prevTask) => {
            return prevTask.filter((task) => task.completed === true);
          });
        }}
      >
        Completed
      </button>
      <button
        className="px-4 py-2 border-2 border-green-200 rounded-md"
        onClick={() => {
          setDisplayTask(tasks);
          setDisplayTask((prevTask) => {
            return prevTask.filter((task) => !task.completed);
          });
        }}
      >
        Uncompleted
      </button>
    </div>
  );
};
export default TasksFilter;
