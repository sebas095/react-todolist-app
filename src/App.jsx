import React, { useState, useEffect, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import allColors from "./styles/colors";
import FormTask from "./components/FormTask";
import Task from "./components/Task";
import { generate as id } from "shortid";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    background-color: #222;
    color: ${allColors.mainColor};
    text-align: center;
    margin: 0;
  }
`;

function App() {
  const [colorSelected, setColorSelected] = useState(allColors.colors[0]);
  const [tasks, setTasks] = useState([]);
  const inputTitle = useRef(null);

  const createNewTask = (title) => {
    const newTask = {
      id: id(),
      title,
      color: colorSelected,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const getTask = (id) => {
    const task = [...tasks].find((task) => task.id === id);
    return task;
  };

  const handleCompleteTask = (id) => {
    const currentTasks = [...tasks];
    const task = getTask(id);
    const index = currentTasks.indexOf(task);

    currentTasks[index].done = !currentTasks[index].done;
    setTasks(currentTasks);
  };

  const handleDeleteTask = (id) => {
    let currentTasks = [...tasks];
    currentTasks = currentTasks.filter((task) => task.id !== id);
    setTasks(currentTasks);
  };

  const handleChangeColor = (color) => {
    setColorSelected(color);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (ev.target.title.value.trim() !== "") {
      createNewTask(ev.target.title.value);
      ev.target.title.value = "";
    }
  };

  useEffect(() => {
    inputTitle.current.focus();
  }, []);

  return (
    <>
      <GlobalStyle />
      <h1>To Do List</h1>
      <FormTask
        handleChangeColor={handleChangeColor}
        handleSubmit={handleSubmit}
        colorSelected={colorSelected}
        ref={inputTitle}
      />
      {tasks.length === 0 && <p>Not tasks yet!</p>}
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            done={task.done}
            title={task.title}
            color={task.color}
            handleCompleteTask={() => handleCompleteTask(task.id)}
            handleDeleteTask={() => handleDeleteTask(task.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
