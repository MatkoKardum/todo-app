const ClearTasks = ({ setTasks }) => {
  const handleButton = () => {
    setTasks([]);
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={handleButton}
      >
        Clear All
      </button>
    </div>
  );
};
export default ClearTasks;
