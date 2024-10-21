import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {storeTask} from "./utlities/taskSlice.js";

function App() {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const alreadyStoredTask = useSelector(
        (state) => state.task.tasks )

    const handleChange = (event) => {
        setTask(event.target.value)
    }

    const addTask = () => {
        dispatch(storeTask(task))

        setTask('')
    }

  return (
      <>
          <div className="m-4 grid grid-cols-2">
              <div>
                  <label htmlFor="default-input"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tasks</label>
                  <input
                      type="text"
                      id="default-input"
                      className="input-field"
                      value={task}
                      onChange={handleChange}
                  />

              </div>
              <div className='m-4'>
                  <button
                      type="button"
                      className="default-btn"
                      onClick={() => {
                          addTask()
                      }}
                  >
                      Add Task
                  </button>
              </div>
          </div>

          <div className='m-4'>
              {alreadyStoredTask.length > 0 && alreadyStoredTask.map((task) => (
                  <li key={task}>{task}</li>
              ))}
          </div>
      </>
  )
}

export default App
