import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const Todo = ({ tasks, setTasks, editTask, deleteTask, completeTask }) => {
  return (
    <div className="flex gap-2 flex-wrap mt-2 max-h-[500px] overflow-auto p-2 text-2xl">
      {tasks.map((task) => (
        <div
          className={`w-full flex items-center rounded-md p-4 ${
            task.completed ? "bg-green-500" : "bg-violet-500"
          }`}
          key={task.id}
        >
          <span className="mr-auto">{task.value}</span>

          <div className="flex gap-5">
            <BiEdit onClick={() => editTask(task.id)} />

            <AiFillCheckCircle onClick={() => completeTask(task.id)} />

            <AiFillDelete onClick={() => deleteTask(task.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Todo;
