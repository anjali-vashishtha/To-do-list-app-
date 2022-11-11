import React from "react";
import addIcon from "../assests/addIcon.png";
import removeIcon from "../assests/Frame.png";
import checked from "../assests/Vector.png";
import { useState } from "react";
import "./Todo.css";
function Todo() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState({
    id: "",
    value: "",
  });
  const [index, setIndex] = useState([]);
  function handleInput(event) {
    setValue({ id: Date.now(), value: event.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.value) {
      setTodos((previous) => [...previous, value]);
      setValue({
        id: "",
        value: "",
      });
    }
  };
  const handleRemoved = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleComplete = (id) => {
    if (index.includes(id)) {
      setIndex((prev) => prev.filter((ID) => ID !== id));
    } else {
      console.log(id);
      setIndex((prev) => [...prev, id]);
    }
  };
  return (
    <div>
      <nav className="nav-bar">
        <h1>TaskDo</h1>
      </nav>
      <section>
        {!showForm ? (
          <div className="addBtn" onClick={() => setShowForm(true)}>
            <img src={addIcon} alt="add Icon" />
            <h1>Add New Task</h1>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <input
              value={value.value}
              placeholder="Type here..."
              onChange={handleInput}
              type="text"
            ></input>
            <button type="submit" className="btnsubmit">
              To Do
            </button>
          </form>
        )}
        <div className="todos">
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <img
                src={removeIcon}
                alt="remove Icon"
                onClick={() => handleRemoved(todo.id)}
              />
              <input
                type="checkbox"
                className="check-box"
                onClick={() => handleComplete(todo.id)}
              />
              <p
                className="content"
                style={{
                  textDecoration: index.includes(todo.id) && "line-through",
                }}
              >
                {todo.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Todo;
