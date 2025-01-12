import React from 'react'

const show_time = (props) => {
  return (
    <>
      <div className="show-time">
        {props.hour}:{props.min}:{props.second}
      </div>
    </>
  )
}

export default show_time
