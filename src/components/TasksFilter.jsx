const TasksFilter = ({ handleAll, handleCompleted, handleUncompleted }) => {
  return (
    <div className="flex justify-center gap-5">
      <button
        className="px-4 py-2 border-2 border-green-200 font-semibold rounded-md"
        onClick={handleAll}
      >
        All
      </button>
      <button
        className="px-4 py-2 border-2 border-green-200 font-semibold rounded-md"
        onClick={handleCompleted}
      >
        Completed
      </button>
      <button
        className="px-4 py-2 border-2 border-green-200 font-semibold rounded-md"
        onClick={handleUncompleted}
      >
        Uncompleted
      </button>
    </div>
  );
};
export default TasksFilter;
