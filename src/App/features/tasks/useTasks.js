import { useLocalStorageState } from "./useLocalStorageState";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageState("tasks", []);
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id));
    };
  
    const toggleDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
  
      }))
    };
  
    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => (
        {
          ...task,
          done: true,
        })))
    };
  
    const addNewTasks = (content) => {
      if (content !== "") {
        setTasks(tasks =>
          [
            ...tasks,
            {
              content,
              done: false,
              id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            }
          ])
      };
      return;
    };
  
    const removeAll = () => {
      setTasks(tasks => [])
    };
  
    return [tasks, addNewTasks, toggleDone, removeTask, removeAll, setAllDone]
  };