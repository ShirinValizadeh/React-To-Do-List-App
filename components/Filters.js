import React from "react"
import {FILTERS} from "../constants"
//  {currentFilter == FILTERS.ALL_TASK ? color="secondery" : "inherit"}
const Filters = ({currentFilter, changeFilter}) => {
  return (
    <div>
      <h3 className="row ">To-Do-List 
      </h3>
      <button
    
        onClick={() => {
        changeFilter(FILTERS.ALL_TASK)
      }}
        className="btn btn-info m-3">All</button>
      <button
       
        onClick={() => {
        changeFilter(FILTERS.COMPLETED)
      }}
        className="btn btn-info m-3">Completed
      </button>
      <button
        onClick={() => {
        changeFilter(FILTERS.UNCOMPLETED)
      }}
        className="btn btn-info m-3">UNCompleted</button>
    </div>
  )
}

export default Filters