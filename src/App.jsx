import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./components/Todo";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  const [newTask, setNewTask] = useState("");
  const [buttonValue, setButtonValue] = useState("Add Task");
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [completed, setCompleted] = useState(false);
  const inputElement = useRef();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, setTasks]);

  const editTask = (taskId) => {
    setButtonValue("Edit");
    setEditing(true);
    setEditingId(taskId);
    inputElement.current.focus();
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((prevTask) => prevTask.id !== taskId);
    });
  };

  const completeTask = (taskId) => {
    setCompleted((prevCompleted) => !prevCompleted);
    setTasks((prevTask) => {
      const beze = prevTask.find((task) => task.id === taskId);

      prevTask.splice(prevTask.indexOf(beze), 1, {
        ...beze,
        completed: !completed,
      });

      return prevTask;
    });
  };

  return (
    <div className="flex flex-col items-center gap-8 p-24 min-h-screen text-black">
      <div className="flex flex-col items-center p-6 min-w-[700px] max-w-[700px] rounded-md drop-shadow-2xl bg-white">
        <div className="w-full">
          <h1 className="text-6xl text-center font-bold mb-8">Todo App</h1>
          <div className="flex justify-center  items-center gap-2 w-full p-2">
            <input
              type="text"
              placeholder="Enter a new task!"
              className="w-full p-2 rounded-md text-black border-2 border-green-200 outline-green-200"
              value={newTask}
              ref={inputElement}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="w-1/3 rounded-md bg-green-200 p-2 font-semibold text-green-700"
              onClick={() => {
                if (newTask) {
                  if (editing) {
                    setTasks((prevTask) => {
                      const beze = prevTask.find(
                        (task) => task.id === editingId
                      );

                      prevTask.splice(prevTask.indexOf(beze), 1, {
                        id: editingId,
                        value: newTask,
                        completed: false,
                      });

                      return prevTask;
                    });
                    setButtonValue("Add Task");
                    setNewTask("");
                    setEditing(false);
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                  } else {
                    setTasks((prevTasks) => [
                      ...prevTasks,
                      { id: uuidv4(), value: newTask, completed: false },
                    ]);
                    setNewTask("");
                  }
                }
              }}
            >
              {buttonValue}
            </button>
          </div>
          <Todo
            tasks={tasks}
            setTasks={setTasks}
            editTask={editTask}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
