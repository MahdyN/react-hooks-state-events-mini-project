import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS)   // state of taskList will be set to the original data set in TASKS, it must be here in order to pass state as a prop to other children
  const [selectedCategory, setSelectedCategory] = useState("All") // state of selected category
  const [taskName, setTaskName] = useState("")
  const [categoryName, setCategoryName] = useState("Code")

  function handleDelete(text) {         // this will trigger whenever the delete button in Task is pressed, it will update the current state of taskList to reflect this
    const newList = taskList.filter((task) => task.text !== text )
    setTaskList(newList)
  }

  function handleFilter(category) {
    setSelectedCategory(category)
  }

  function handleName(event) {
    setTaskName(event.target.value)
  }

  function handleCategory(event) {
    setCategoryName(event.target.value)
  }

  function onTaskFormSubmit(event) {
    event.preventDefault()
    
    const newTask = {
      text: taskName,
      category: categoryName
    }

    const newToDoList = [...taskList, newTask]

    setTaskList(newToDoList)
    setTaskName("")
  } 

  const tasksToBeDisplayed = taskList.filter((task) => {
    if(selectedCategory === "All") return true;
    return task.category === selectedCategory;
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} handleFilter={handleFilter} selectedCategory = {selectedCategory} />
      <NewTaskForm categories = {CATEGORIES} taskName = {taskName} handleName = {handleName} handleCategory = {handleCategory} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList taskList = {tasksToBeDisplayed} handleDelete = {handleDelete}  />
    </div>
  );
}

export default App;
