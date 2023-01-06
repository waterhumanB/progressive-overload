import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRoutineData } from '../../../states/routines'
import { ReactComponent as AfterExercise } from '../../../assets/imgs/after-exercise.svg'
import { getRecordsData } from '../../../states/records'
import { fetchedDate } from '../../../utils/fetchedDate'

const RoutineFinish = () => {
  const location = useLocation()
  const routineSelector = useAppSelector(getRoutineData)
  const recordsSelector = useAppSelector(getRecordsData)
  const currentRutineData = routineSelector.routines.byId[location.state.currentRoutine]
  const currentExerciseRecordIds = currentRutineData.recent[0].recordIds

  const currentExeciseRecordData = Object.values(recordsSelector.records.byId)
    .filter((data) => currentExerciseRecordIds.includes(data.id))
    .map((data) => data.set)
  const totalSet = currentExeciseRecordData.map((data) => data.length).reduce((acc, el) => acc + el)
  const totalRab = currentExeciseRecordData
    .map((data) => data.map((item) => item.rab).reduce((acc, el) => acc + el))
    .reduce((acc, el) => acc + el)
  const totalVolume = currentExeciseRecordData
    .map((data) => data.map((item) => item.kg * item.rab).reduce((acc, el) => acc + el))
    .reduce((acc, el) => acc + el)

  const durationExecise = () => {
    const startTime = currentRutineData.recent.reverse()[0].startAt.split(' ')[4].split(':')
    const endTime = currentRutineData.recent.reverse()[0].endAt.split(' ')[4].split(':')
    const hour = (Number(endTime[0]) - Number(startTime[0])) * 60
    const minute = Number(endTime[1]) - Number(startTime[1])
    return hour + minute
  }

  return (
    <section>
      <div>
        <div>{currentRutineData.title}</div>
        <div>{fetchedDate(currentRutineData.recent.reverse()[0].endAt)}</div>
      </div>
      <div>
        <AfterExercise />
      </div>
      <div>
        <div>
          <div>{routineSelector.routines.allIds.indexOf(location.state.currentRoutine) + 1}th</div>
          <div>WORKOUT</div>
        </div>
        <div>
          <div>{durationExecise()}</div>
          <div>DURATION</div>
        </div>
        <div>
          <div>{totalVolume}</div>
          <div>VOLUME</div>
        </div>
        <div>
          <div>{currentRutineData.workout.length}</div>
          <div>EXERCISES</div>
        </div>
        <div>
          <div>{totalSet}</div>
          <div>SETS</div>
        </div>
        <div>
          <div>{totalRab}</div>
          <div>RPES</div>
        </div>
      </div>
    </section>
  )
}

export default RoutineFinish
