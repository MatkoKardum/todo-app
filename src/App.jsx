import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import TaskForm from "./components/TaskForm";
import ClearTasks from "./components/ClearTasks";
import TasksFilter from "./components/TasksFilter";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [displayTasks, setDisplayTask] = useState([]);
  const [filter, setFilter] = useState("");

  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    switch (filter) {
      case "all":
        setDisplayTask(tasks);
        break;
      case "completed":
        setDisplayTask(tasks.filter((task) => task.completed));
        break;
      case "uncompleted":
        setDisplayTask(tasks.filter((task) => !task.completed));
        break;
      default:
        setDisplayTask(tasks);
    }
  }, [tasks, filter]);

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

  const handleAll = () => {
    setFilter("all");
  };

  const handleCompleted = () => {
    setFilter("completed");
  };

  const handleUncompleted = () => {
    setFilter("uncompleted");
  };

  return (
    <div className="flex flex-col items-center gap-8 p-24 min-h-screen text-black">
      <div className="flex flex-col items-center p-6 min-w-[700px] max-w-[700px] rounded-md drop-shadow-2xl bg-white">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-6xl text-center font-bold mb-8">Todo App</h1>
          <TaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            setTasks={setTasks}
          />

          <TasksFilter
            handleAll={handleAll}
            handleCompleted={handleCompleted}
            handleUncompleted={handleUncompleted}
          />

          {!displayTasks.length ? (
            <span className="font-medium text-center my-8 text-2xl">
              Empty List ❌
            </span>
          ) : (
            <TaskList
              tasks={displayTasks}
              enableEditTask={enableEditTask}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          )}

          {displayTasks.length >= 2 && (
            <ClearTasks setTasks={setTasks} filter={filter} />
          )}
        </div>
      </div>

      {editing && (
        <EditTask
          setEditing={setEditing}
          setEditingTask={setEditingTask}
          editingTaskId={editingTaskId}
          editingTask={editingTask}
          setTasks={setTasks}
        />
      )}
    </div>
  );
};

export default App;
