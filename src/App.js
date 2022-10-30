import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTask = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTask);

  //the fetchTasks func triggers sendRequest func inside useHttp hook
  // sendRequest uses few other hooks
  //Each time those hooks are updated App component will re-render because those hooks inside sendRequest is tied to App component
  //So just adding fetchTasks as dependencies in useEffect will create infinite loop of re-render
  useEffect(() => {
    fetchTasks({
      url: "https://react-http-9c6c6-default-rtdb.firebaseio.com/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
