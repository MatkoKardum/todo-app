import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const TaskOptions = ({ task, enableEditTask, completeTask, deleteTask }) => {
  return (
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
  );
};
export default TaskOptions;
