import Task from "./Task";

const Tasks = ({ tasks, onDelete, onUpdate, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
