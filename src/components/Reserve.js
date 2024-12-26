import React from 'react'
import Booking from './Booking'

const Reserve = (props) => {
  return (
    <Booking availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
  )
}

export default Reserve;