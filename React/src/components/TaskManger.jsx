import React, { useState, useEffect } from "react";
import Button from "./ui/button";
import Card from "./ui/card";

// Custom hook for localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

const FILTERS = {
  All: () => true,
  Active: (t) => !t.completed,
  Completed: (t) => t.completed,
};

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 border rounded focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        {Object.keys(FILTERS).map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <ul className="space-y-2">
        {tasks.filter(FILTERS[filter]).length === 0 && (
          <li className="text-gray-500 text-center">No tasks</li>
        )}
        {tasks.filter(FILTERS[filter]).map((task) => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded px-3 py-2">
            <span
              className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskManager;
