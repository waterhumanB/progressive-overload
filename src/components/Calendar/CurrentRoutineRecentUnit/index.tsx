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
        <S.unitMenuBox>
          {TOTAL_VOLUME.map((data, i) => (
            <S.volumeMenu key={data}>
              <S.volume colorIdx={i} /> <S.value>{data}</S.value>
            </S.volumeMenu>
          ))}
        </S.unitMenuBox>
      ) : (
        <S.unitMenuBox>
          {DURATION.map((data, i) => (
            <S.durationMenu key={data}>
              <S.duration colorIdx={i} /> <S.value>{data}</S.value>
            </S.durationMenu>
          ))}
        </S.unitMenuBox>
      )}
    </S.recentUnitMenuContainer>
  )
}

export default CurrentRoutineRecentUnit
