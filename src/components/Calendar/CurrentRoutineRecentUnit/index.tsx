import * as S from './styles'

interface ICurrentRoutineRecentUnitProps {
  dataSelector: boolean
}
const TOTAL_VOLUME = [4000, 8000, 12000, 16000, 20000]
const DURATION = [30, 60, 90, 120, 150]

const CurrentRoutineRecentUnit = ({ dataSelector }: ICurrentRoutineRecentUnitProps) => {
  return (
    <S.recentUnitMenuContainer>
      {dataSelector ? (
        <div className='unitMenuBox'>
          {TOTAL_VOLUME.map((data, i) => (
            <div className='volumeMenu' key={data}>
              <div className={`volume v${i}`} /> <div className='value'>{data}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className='unitMenuBox'>
          {DURATION.map((data, i) => (
            <div className='durationMenu' key={data}>
              <div className={`duration d${i}`} /> <div className='value'>{data}</div>
            </div>
          ))}
        </div>
      )}
    </S.recentUnitMenuContainer>
  )
}

export default CurrentRoutineRecentUnit
