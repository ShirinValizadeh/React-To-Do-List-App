import React from "react"
import {FILTERS} from "../constants"

const Filters = ({currentFilter, changeFilter}) => {
  return (
    <div>
      <h3>Filters:
      </h3>
      <button
      style={{background:currentFilter === FILTERS.ALL_TASK ? "gray" : "inherit"}}
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