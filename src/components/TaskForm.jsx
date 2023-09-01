import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ newTask, setNewTask, setTasks }) => {
  return (
    <form className="w-full flex justify-center items-center gap-2 p-2">
      <input
        type="text"
        placeholder="Enter a new task!"
        className="w-full p-2 rounded-md text-black border-2 border-green-200 outline-green-200"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className="w-1/3 rounded-md bg-green-200 p-2 font-semibold text-green-700"
        onClick={() => {
          if (!newTask) return;
          setTasks((prevTasks) => [
            ...prevTasks,
            { id: uuidv4(), value: newTask, completed: false },
          ]);
          setNewTask("");
        }}
      >
        Add Task
      </button>
    </form>
  );
};
export default TaskForm;
