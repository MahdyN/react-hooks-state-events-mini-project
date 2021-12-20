import React from "react";

function NewTaskForm({categories, taskName, handleName, handleCategory, onTaskFormSubmit}) {
  const optionCategories = categories.filter((category) => category !== "All")
  
  return (
    <form className="new-task-form" onSubmit ={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value ={taskName} onChange = {handleName} />
      </label>
      <label>
        Category
        <select name="category" onChange = {handleCategory} >
          {optionCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
