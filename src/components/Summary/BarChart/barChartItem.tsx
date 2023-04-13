import { memo, useState } from 'react'
import * as S from './styles'

interface IBarChartItemProps {
  dayWeekMonthSelect: string
  data: any
  idx: number
  volumeAndDurationSelect: string
  heightValue: number
  holiday: string
  monthByDayData: number
  monthByWeekData: number
  monthByMonthData: number
  mouseEvent: boolean
}

const SVG_X_LENGTH = 75
const BALLOON_Y = 250
const BALLOON_Y_OVER = -6
const BALLOON_Y_MAX = 240
const BALLOON_VALUE_Y_OVER = 15
const BALLOON_VALUE_Y_MAX = 261
const BAR_VALUE_Y = [270, 290, 310]

const BarChartItem = ({
  dayWeekMonthSelect,
  data,
  idx,
  volumeAndDurationSelect,
  heightValue,
  holiday,
  monthByDayData,
  monthByWeekData,
  monthByMonthData,
  mouseEvent,
}: IBarChartItemProps) => {
  const [hover, setHover] = useState(false)

  const baseX = idx * SVG_X_LENGTH
  const barX = baseX + 25
  const aniBarX = baseX + 8
  const barValueX = baseX + 15
  const ballonValueX = baseX - 7

  const dayBarValueX = monthByDayData + 1 > 9 ? baseX + 11 : barValueX
  const weekBarValueX = monthByWeekData + 1 > 9 ? baseX + 10 : baseX + 13
  const monthBarValueX = monthByMonthData + 1 > 9 ? barValueX : baseX + 19
  const dateBarValueX = baseX + 10

  const getVolumeX = (volume: number) => {
    let volumeX
    if (volume > 999 && volume < 10000) {
      volumeX = baseX + 6
    }
    if (volume > 9999 && volume < 100000) {
      volumeX = baseX + 4
    }
    if (volume > 99999 && volume < 1000000) {
      volumeX = baseX + 1
    }
    if (volume > 999999 && volume < 10000000) {
      volumeX = baseX - 3
    }
    return volumeX
  }

  const getDurationX = (duration: number) => {
    let durationX
    if (duration < 10) {
      durationX = baseX + 10
    }
    if (duration > 9 && duration < 100) {
      durationX = baseX + 15
    }
    if (duration > 99 && duration < 1000) {
      durationX = baseX + 12
    }
    if (duration > 999 && duration < 10000) {
      durationX = baseX + 8
    }
    if (duration > 9999 && duration < 100000) {
      durationX = baseX + 4
    }
    return durationX
  }

  const ballonY = BALLOON_Y - heightValue < 0 ? BALLOON_Y_OVER : BALLOON_Y_MAX - heightValue
  const ballonValueY = BALLOON_Y - heightValue < 0 ? BALLOON_VALUE_Y_OVER : BALLOON_VALUE_Y_MAX - heightValue
  const dayWeekBallonY =
    BALLOON_Y - heightValue < 0 || BALLOON_Y_MAX - heightValue < 0 ? BALLOON_Y_OVER : BALLOON_Y_MAX - heightValue
  const dayWeekBallonValueY =
    BALLOON_Y - heightValue < 0 || BALLOON_VALUE_Y_MAX - heightValue < 0
      ? BALLOON_VALUE_Y_OVER
      : BALLOON_VALUE_Y_MAX - heightValue

  return (
    <g>
      <g onMouseMove={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <S.bar barValue={volumeAndDurationSelect} x={barX} heightValue={heightValue} />
        <S.animatedBar mouseEvent={mouseEvent} x={aniBarX} heightValue={heightValue + 1} />
        {dayWeekMonthSelect === 'day' && (
          <g>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[0]} x={barValueX}>
              {data.date.split(' ')[3]}
            </S.barValue>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[1]} x={dayBarValueX}>
              {`${monthByDayData + 1}/${data.date.split(' ')[2]}`}
            </S.barValue>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[2]} x={dateBarValueX}>
              {holiday}
            </S.barValue>
          </g>
        )}
        {dayWeekMonthSelect === 'week' && (
          <g>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[0]} x={barValueX}>
              {data.year}
            </S.barValue>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[1]} x={weekBarValueX}>
              {`${monthByWeekData + 1}/${data.week}주`}
            </S.barValue>
          </g>
        )}
        {dayWeekMonthSelect === 'month' && (
          <g>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[0]} x={barValueX}>
              {data.year}
            </S.barValue>
            <S.barValue holiday={holiday} y={BAR_VALUE_Y[1]} x={monthBarValueX}>
              {`${monthByMonthData + 1}월`}
            </S.barValue>
          </g>
        )}
        {volumeAndDurationSelect === 'volume' && (
          <g>
            <S.barBalloon hover={hover} x={ballonValueX} y={ballonY} />
            <S.barBalloonValue hover={hover} x={getVolumeX(data.volume)} y={ballonValueY}>
              {`${data.volume.toLocaleString()}kg`}
            </S.barBalloonValue>
          </g>
        )}
        {volumeAndDurationSelect === 'duration' && (
          <g>
            <S.barBalloon hover={hover} x={ballonValueX} y={dayWeekBallonY} />
            <S.barBalloonValue hover={hover} x={getDurationX(data.duration)} y={dayWeekBallonValueY}>
              {`${data.duration.toLocaleString()}분`}
            </S.barBalloonValue>
          </g>
        )}
      </g>
    </g>
  )
}

export default memo(BarChartItem)
