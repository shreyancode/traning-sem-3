import React from 'react'

export default function Inputs() {
  return (
    <div className="inputs">
      <input type="text" placeholder="enter your task here" id="input" />
      <button type="submit" id="btn">Add</button>
      <button type="submit" id="remove">remove</button>
    </div>
  )
}
