import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const Todo = ({ tasks, setTasks, editTask, deleteTask, completeTask }) => {
  return (
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
              onClick={() => editTask(task.id)}
              className="rounded-full bg-green-200 text-green-500 p-1"
            />

            <AiFillCheckCircle
              onClick={() => completeTask(task.id)}
              className="rounded-full bg-green-200 text-green-500 p-1"
            />

            <AiFillDelete
              onClick={() => deleteTask(task.id)}
              className="rounded-full bg-red-200 text-red-500 p-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Todo;
