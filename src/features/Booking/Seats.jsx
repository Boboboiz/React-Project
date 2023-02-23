import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchScheduleDetail } from './thunk'

const Seats = () => {
  // từ URL => mã lịch chiếu
    const params = useParams()
    console.log(params.id)
    const scheduleId = params.id
    const dispatch = useDispatch()
  // call API => dư liệu phòng chiếu => store
  useEffect(()=> {
    dispatch(fetchScheduleDetail(scheduleId))
  },[scheduleId, dispatch])
  return (
    <div>Seats</div>
  )
}

export default Seats