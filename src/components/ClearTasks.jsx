const ClearTasks = ({ setTasks, filter }) => {
  const handleButton = () => {
    switch (filter) {
      case "all":
        setTasks([]);
        break;
      case "completed":
        setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
        break;
      case "uncompleted":
        setTasks((prevTasks) => prevTasks.filter((task) => task.completed));
        break;
      default:
        setTasks([]);
        break;
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        className="px-4 py-2 bg-red-200 text-red-700 font-semibold rounded-md"
        onClick={handleButton}
      >
        Clear All
      </button>
    </div>
  );
};
export default ClearTasks;
