import React from "react"

const TaskItem = ({task , onCheck}) => {

const onCheckClick = ()=>{
    onCheck(task.id)
}


  return (
    <li className="list-group-item list-group-item-dark">
      <input 
      onClick={onCheckClick}
      type="checkbox"
      checked={task.isCompleted}
      /> 
      {task.title}
    </li>

  )

}

export default TaskItem