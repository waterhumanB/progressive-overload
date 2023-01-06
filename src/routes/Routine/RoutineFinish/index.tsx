import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'

const RoutineFinish = () => {
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  console.log(routineSelector.routines.byId)
  console.log(location)
  return <div>RoutineFinish</div>
}

export default RoutineFinish
