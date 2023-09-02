const TasksFilter = ({ handleAll, handleCompleted, handleUncompleted }) => {
  return (
    <div className="flex justify-center gap-1 lg:gap-5">
      <button
        className="lg:px-4 lg:py-2 py-2 px-2 lg:text-lg text-md border-2 border-green-200 font-semibold rounded-md"
        onClick={handleAll}
      >
        All
      </button>
      <button
        className="lg:px-4 lg:py-2 py-2 px-2 lg:text-lg text-md border-2 border-green-200 font-semibold rounded-md"
        onClick={handleCompleted}
      >
        Completed
      </button>
      <button
        className="lg:px-4 lg:py-2 py-2 px-2 lg:text-lg text-md border-2 border-green-200 font-semibold rounded-md"
        onClick={handleUncompleted}
      >
        Uncompleted
      </button>
    </div>
  );
};
export default TasksFilter;
