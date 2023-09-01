import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editing, setEditing] = useState(false);
  const inputElement = useRef();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, setTasks]);

  const enableEditTask = (taskId) => {
    setEditing(true);
    setEditingTaskId(taskId);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((prevTask) => prevTask.id !== taskId);
    });
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 p-24 min-h-screen text-black">
        <div className="flex flex-col items-center p-6 min-w-[700px] max-w-[700px] rounded-md drop-shadow-2xl bg-white">
          <div className="w-full">
            <h1 className="text-6xl text-center font-bold mb-8">Todo App</h1>
            <form className="flex justify-center  items-center gap-2 w-full p-2">
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
                  if (newTask) {
                    setTasks((prevTasks) => [
                      ...prevTasks,
                      { id: uuidv4(), value: newTask, completed: false },
                    ]);
                    setNewTask("");
                  }
                }}
              >
                Add Task
              </button>
            </form>

            {/* TODO */}
            <div className="flex gap-2 flex-wrap mt-2 max-h-[500px] overflow-auto p-2 text-2xl">
              {tasks.map((task) => (
                <div
                  className={`w-full flex items-center rounded-md p-4 ${
                    task.completed
                      ? "bg-green-100 border-2 border-green-200 drop-shadow-md"
                      : "bg-white border-2 border-green-200"
                  }`}
                  key={task.id}
                >
                  <span className="mr-auto">{task.value}</span>

                  <div className="flex gap-5">
                    <BiEdit
                      onClick={() => enableEditTask(task.id)}
                      className="rounded-full bg-green-200 text-green-500 p-2 text-4xl"
                    />

                    <AiFillCheckCircle
                      onClick={() => completeTask(task.id)}
                      className="rounded-full bg-green-200 text-green-500 p-2 text-4xl"
                    />

                    <AiFillDelete
                      onClick={() => deleteTask(task.id)}
                      className="rounded-full bg-red-200 text-red-500 p-2 text-4xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {editing && (
          <div>
            <div
              className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.8)] z-0"
              onClick={() => setEditing(false)}
            ></div>
            <div className="flex justify-center items-center absolute top-0 right-0 left-0 m-auto bottom-0 p-6 min-w-[700px] z-20 max-h-[200px] max-w-[700px] rounded-md drop-shadow-2xl bg-white">
              <form className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter a new task!"
                  ref={inputElement}
                  value={editingTask}
                  className="w-full p-2 rounded-md text-black border-2 border-green-200 outline-green-200"
                  onChange={(e) => {
                    setEditingTask(e.target.value);
                  }}
                />

                <button
                  className="w-full rounded-md bg-green-200 p-2 font-semibold text-green-700"
                  onClick={() => {
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
                  }}
                >
                  Edit Task
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
