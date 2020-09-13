import React from "react"
import ReactDOM from "react-dom"
import TaskContainer from "./containers/TaskContainer"

const App = ()=>{
    return (
        <div className="container">
            <TaskContainer />
        </div>
    )
}






ReactDOM.render(
    <App />, document.querySelector('#root'))