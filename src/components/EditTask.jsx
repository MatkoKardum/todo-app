import { useEffect, useRef } from "react";
import EditOverlay from "./EditOverlay";

const EditTask = ({
  setEditing,
  setEditingTask,
  editingTaskId,
  editingTask,
  setTasks,
}) => {
  const inputElement = useRef();

  useEffect(() => {
    inputElement.current.focus();
  }, [inputElement]);

  const handleInput = (e) => {
    setEditingTask(e.target.value);
  };

  const handleButton = () => {
    if (!editingTask) return;
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === editingTaskId) {
          return {
            id: task.id,
            value: editingTask,
            completed: false,
          };
        }
        return task;
      });
    });

    setEditingTask("");
  };

  return (
    <div>
      <EditOverlay setEditing={setEditing} />
      <div className="flex justify-center items-center absolute top-0 right-0 left-0 m-auto bottom-0 p-6 min-w-[700px] z-20 max-h-[200px] max-w-[700px] rounded-md drop-shadow-2xl bg-white">
        <form className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter a new task!"
            ref={inputElement}
            value={editingTask}
            className="w-full p-2 rounded-md text-black border-2 border-green-200 outline-green-200"
            onChange={(e) => handleInput(e)}
          />

          <button
            className="w-full rounded-md bg-green-200 p-2 font-semibold text-green-700"
            onClick={handleButton}
          >
            Edit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
