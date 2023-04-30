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

const SVG_X_LENGTH = 76
const BAR_VALUE_Y = [270, 290, 310]
const TEN = 10
const HUNDRED = 100
const THOUSAND = 1000
const TEN_THOUSAND = 10000
const HUNDRED_THOUSAND = 100000
const MILLION = 1000000
const TEN_MILLION = 10000000

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

  const baseY = 250 - heightValue
  const ballonY = baseY < 0 ? -6 : 240 - heightValue
  const ballonValueY = baseY < 0 ? 15 : 261 - heightValue
  const dayWeekBallonY = baseY < 0 || 240 - heightValue < 0 ? -6 : 240 - heightValue
  const dayWeekBallonValueY = baseY < 0 || 261 - heightValue < 0 ? 15 : 261 - heightValue

  const getVolumeX = (volume: number) => {
    const offsetX =
      (volume >= HUNDRED && volume < THOUSAND && 11) ||
      (volume >= THOUSAND && volume < TEN_THOUSAND && 7) ||
      (volume >= TEN_THOUSAND && volume < HUNDRED_THOUSAND && 4) ||
      (volume >= HUNDRED_THOUSAND && volume < MILLION && 0) ||
      (volume >= MILLION && volume < TEN_MILLION && -4) ||
      0

    return baseX + offsetX
  }

  const getDurationX = (duration: number) => {
    const offsetX =
      (duration >= 0 && duration < TEN && 21) ||
      (duration >= TEN && duration < HUNDRED && 20) ||
      (duration >= HUNDRED && duration < THOUSAND && 15) ||
      (duration >= THOUSAND && duration < TEN_THOUSAND && 9) ||
      (duration >= TEN_THOUSAND && duration < HUNDRED_THOUSAND && 6) ||
      (duration >= HUNDRED_THOUSAND && duration < MILLION && 2) ||
      0

    return baseX + offsetX
  }

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
