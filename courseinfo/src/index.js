import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = ({ title }) => <h1>{title}</h1>;

const Content = ({ parts }) => (
  <>
    <Part part={parts[0].name} exercises={parts[0].exercises} />
    <Part part={parts[1].name} exercises={parts[1].exercises} />
    <Part part={parts[2].name} exercises={parts[2].exercises} />
  </>
);
const Total = ({ parts }) => (
  <p>
    Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
);

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const App = () => {
  const course = {
     name: "Half Stack application development",
    parts: [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]};

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));