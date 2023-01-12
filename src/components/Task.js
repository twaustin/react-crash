import { FaTimes, FaPen } from "react-icons/fa";

const Task = ({ task, onDelete, onUpdate, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <div>
          <FaPen
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => onUpdate(task)}
          />
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
