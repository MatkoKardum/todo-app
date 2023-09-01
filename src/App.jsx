import { useState, useRef, useEffect } from "react";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import TaskForm from "./components/TaskForm";

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
  }, [tasks]);

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
    <div className="flex flex-col items-center gap-8 p-24 min-h-screen text-black">
      <div className="flex flex-col items-center p-6 min-w-[700px] max-w-[700px] rounded-md drop-shadow-2xl bg-white">
        <h1 className="text-6xl text-center font-bold mb-8">Todo App</h1>
        <TaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          setTasks={setTasks}
        />

        <TaskList
          tasks={tasks}
          enableEditTask={enableEditTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>

      {editing && (
        <EditTask
          setEditing={setEditing}
          setEditingTask={setEditingTask}
          editingTaskId={editingTaskId}
          editingTask={editingTask}
          setTasks={setTasks}
          inputElement={inputElement}
        />
      )}
    </div>
  );
};

export default App;
