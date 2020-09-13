import React from "react"

const TaskItem = ({task , onCheck}) => {

const onCheckClick = ()=>{
    onCheck(task.id)
}


  return (
    <li >
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