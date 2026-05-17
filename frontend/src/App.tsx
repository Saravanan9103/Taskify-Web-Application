import { useEffect, useState } from "react";
import API from "./api";
import { Trash2, Pencil } from "lucide-react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // FETCH TASKS
  const fetchTasks = async () => {
    const response = await API.get("/tasks/");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ADD TASK
  const addTask = async () => {
    if (!title.trim()) return;

    await API.post("/tasks/create/", {
      title,
      completed: false,
    });

    setTitle("");
    fetchTasks();
  };

  // DELETE TASK
  const deleteTask = async (id: number) => {
    await API.delete(`/tasks/delete/${id}/`);
    fetchTasks();
  };

  // EDIT TASK
  const editTask = (task: Task) => {
    setTitle(task.title);
    setEditingId(task.id);
  };

  // UPDATE TASK
  const updateTask = async () => {
    await API.put(`/tasks/update/${editingId}/`, {
      title,
      completed: false,
    });

    setTitle("");
    setEditingId(null);

    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Taskify</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {editingId ? (
          <button onClick={updateTask}>Update</button>
        ) : (
          <button onClick={addTask}>Add</button>
        )}
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <p>{task.title}</p>

            <div className="actions">
              <Pencil
                size={20}
                cursor="pointer"
                onClick={() => editTask(task)}
              />

              <Trash2
                size={20}
                cursor="pointer"
                onClick={() => deleteTask(task.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;