import React from "react";
import styled from "styled-components";
import { keyFrameTask } from "../styles/KeyFrames";

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  align-items: center;
  justify-items: start;
  padding: 0 1rem;
  background-color: ${({ color }) => color};
  width: 100%;
  max-width: 300px;
  margin: 1rem auto;
  border-radius: 5px;
  animation: ${keyFrameTask} 0.7s ease;
`;

const TaskButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #222;
  }
`;

const TaskText = styled.p`
  font-size: 0.8rem;
  color: #fff;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

const Task = ({ title, color, done, handleCompleteTask, handleDeleteTask }) => (
  <TaskContainer color={color}>
    <input
      type="checkbox"
      onChange={handleCompleteTask}
      defaultChecked={done}
    />
    <TaskText done={done}>{title}</TaskText>
    <TaskButton onClick={handleDeleteTask}>Delete</TaskButton>
  </TaskContainer>
);

export default Task;
