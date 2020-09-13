import React from "react"
import TaskList from "../components/TaskList"
import AddTask from "../components/AddTask"
import Filters from "../components/Filters"
import {FILTERS} from "../constants"


export default class TaskContainer extends React.Component{
    state ={
        taskList:[
            {id:"t1" , title:"task1" , isCompleted :false},
            {id:"t2" , title:"task2" , isCompleted:false}
        ],
        currentFilter : FILTERS.ALL_TASKS
    }

    //!LOGIG 
addTask = (title) =>{
    const newTaskList = [... this.state.taskList]

    const newTask ={
        title,
        id: `${Date.now()}`,
        isCompleted:false,
    }

    newTaskList.push(newTask)
    this.setState({taskList:newTaskList})
}

    //checkbox
    onCheck =(taskId) =>{
        const newList= this.state.taskList.map(task=>{
               if (task.id === taskId) {
                   return{
                       ...task,
                       isCompleted : !task.isCompleted
                   }
               }
               return task
           })
           this.setState({taskList:newList})
       }
   
//filter
changeFilter = (newFilter) => this.setState({currentFilter:newFilter})


    render (){

        const {taskList , currentFilter} = this.state
        const {addTask , onCheck , changeFilter} = this;
        return (
            <div>
                <Filters currentFilter={currentFilter} changeFilter={changeFilter}/>
                <AddTask addTask={addTask} />
                <TaskList onCheck={onCheck} taskList={taskList} />
            </div>
        ) 
   
    }
}