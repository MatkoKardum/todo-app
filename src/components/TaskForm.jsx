import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef } from "react";

const TaskForm = ({ newTask, setNewTask, setTasks }) => {
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, [inputElement]);

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

  const handleButton = () => {
    if (!newTask) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: uuidv4(), value: newTask, completed: false },
    ]);
    setNewTask("");
    inputElement.current.focus();
  };

  return (
    <form
      className="w-full flex justify-center items-center gap-2 p-2"
      onSubmit={(e) => handleForm(e)}
    >
      <input
        type="text"
        placeholder="Enter a new task!"
        className="w-full p-2 rounded-md text-black border-2 border-green-200 outline-green-200"
        value={newTask}
        ref={inputElement}
        onChange={(e) => handleInput(e)}
      />
      <button
        className="w-1/3 rounded-md bg-green-200 p-2 font-semibold text-green-700"
        onClick={handleButton}
      >
        Add Task
      </button>
    </form>
  );
};
export default TaskForm;
