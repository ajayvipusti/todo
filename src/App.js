import React, { useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from "react-icons/ai";
import "./App.css";

const App = () => {
  const [activetask, setActivetask] = useState([]);
  const [completingtask, setCompletingtask] = useState([]);
  const [val, setVal] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [index, setIndex] = useState("");

  const handAddActiveTask = () => {
    setActivetask([...activetask, val]);
    setVal("");
  };

  const handleDelete = (i) => {
    activetask.splice(i, 1);
    setActivetask([...activetask]);
  };

  const handleEdit = (i, ele) => {
    setVal(ele);
    setIsEdit(true);
    setIndex(i);
  };

  const handAddActiveTaskEdit = () => {
    activetask[index] = val;

    setActivetask([...activetask]);

    setVal("");

    setIsEdit(false);
  };

  const handleCompleted = (i, ele) => {
    activetask.splice(i, 1);
    setActivetask([...activetask]);

    setCompletingtask([...completingtask, ele]);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="mx-auto">Todo</h1>
      </div>

      <div className="mx-auto text-center">
        <input
          type="text"
          className="int"
          onChange={(e) => setVal(e.target.value)}
          value={val}
          placeholder="Enter a Task"
        />

        {isEdit ? (
          <button className="go" onClick={handAddActiveTaskEdit}>
            Edit
          </button>
        ) : (
          <button className="go" onClick={handAddActiveTask}>
            Go
          </button>
        )}
      </div>
      <div className="d-flex justify-content-betwwen">
        <div
          style={{ background: "green", padding: "10px", width: "40%" }}
          className="mt-4"
        >
          <h2 className="text-light">Active Task</h2>
          {activetask.map((ele, i) => (
            <div
              style={{ background: "yellow", width: "90%", padding: "5px" }}
              className="my-3 d-flex justify-content-between align-items-center"
            >
              <p>{ele}</p>
              <div className="my-auto d-flex">
                <p>
                  <AiFillDelete
                    fontSize={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(i)}
                  />
                </p>

                <p className="ms-3">
                  <AiFillEdit
                    fontSize={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(i, ele)}
                  />
                </p>
                <p className="ms-3">
                  <AiOutlineCheck
                    fontSize={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCompleted(i, ele)}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{ background: "#f27c55", padding: "10px", width: "40%" }}
          className="mt-4 ms-5"
        >
          <h2 className="text-light">Completed Task</h2>
          {completingtask.map((ele, i) => (
            <div
              style={{ background: "yellow", width: "90%", padding: "5px" }}
              className="my-3 d-flex justify-content-between align-items-center"
            >
              <p>{ele}</p>
              <div className="my-auto d-flex">
                <p>
                  <AiFillDelete
                    fontSize={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(i)}
                  />
                </p>

                <p className="ms-3">
                  <AiFillEdit
                    fontSize={22}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(i, ele)}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
