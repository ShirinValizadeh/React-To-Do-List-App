import React, { Component } from "react"

export default class AddTask extends Component {
    state = {
        taskTitle: ""
    }

    onChangeTitle = (e) => this.setState({ taskTitle: e.target.value })
   

    //addTask
    onAddTask =()=>{
        const {addTask} =this.props
        const {taskTitle} = this.state

        addTask(taskTitle)
        this.setState({taskTitle:""})

    }


    
    render() {
        const { onChangeTitle ,onAddTask} = this
        const { taskTitle } = this.state

        return (
            <div>
                <input
                    type="text"
                    value={taskTitle}
                    placeholder="Task Title"
                    onChange={onChangeTitle}
                />
                <button className="btn btn-secondary" disabled={!taskTitle} onClick={onAddTask}>
                    Add Task
                </button>
            </div>
        )

    }

}