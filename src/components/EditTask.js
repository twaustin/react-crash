import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditTask = () => {
  const { state } = useLocation();
  const [text, setText] = useState(state.text);
  const [day, setDay] = useState(state.day);
  const [reminder, setReminder] = useState(state.reminder);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ text, day, reminder }),
    }).then(() => {
      window.location.replace("http://localhost:3000");
    });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={state.reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Update Task" className="btn btn-block" />
    </form>
  );
};

export default EditTask;
