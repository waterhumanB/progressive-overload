import * as S from './styles'

interface IBarChartItemProps {
  dayWeekMonthSelect: string
  data: any
  idx: number
  volumeAndDurationSelect: string
  heightValue: number
  hoilday: string
  monthByDayData: number
  monthByWeekData: number
  monthByMonthData: number
}

const SVG_X_LENGTH = 68
const BALLOON_Y = 250
const BALLOON_Y_OVER = -6
const BALLOON_Y_MAX = 190
const BALLOON_VALUE_Y_OVER = 15
const BALLOON_VALUE_Y_MAX = 211
const RXRY = 10

const BarChartItem = ({
  dayWeekMonthSelect,
  data,
  idx,
  volumeAndDurationSelect,
  heightValue,
  hoilday,
  monthByDayData,
  monthByWeekData,
  monthByMonthData,
}: IBarChartItemProps) => {
  return (
    <g>
      <g key={data.date} data-select={dayWeekMonthSelect}>
        <S.bar barValue={volumeAndDurationSelect} x={idx * SVG_X_LENGTH + 10} heightValue={heightValue} />
        <S.animatedBar x={idx * SVG_X_LENGTH - 7} heightValue={heightValue + 1} />
        {dayWeekMonthSelect === 'day' && (
          <g>
            <S.barValue holiday={hoilday} y='270' x={idx * SVG_X_LENGTH - 1}>
              {data.date.split(' ')[3]}
            </S.barValue>
            <S.barValue
              holiday={hoilday}
              y='290'
              x={monthByDayData + 1 > 9 ? idx * SVG_X_LENGTH - 4 : idx * SVG_X_LENGTH - 1}
            >
              {`${monthByDayData + 1}/${data.date.split(' ')[2]}`}
            </S.barValue>
            <S.barValue holiday={hoilday} y='310' x={idx * SVG_X_LENGTH - 6}>
              {hoilday}
            </S.barValue>
          </g>
        )}
        {dayWeekMonthSelect === 'week' && (
          <g>
            <S.barValue holiday={hoilday} y='270' x={idx * SVG_X_LENGTH - 1}>
              {data.year}
            </S.barValue>
            <S.barValue
              holiday={hoilday}
              y='290'
              x={monthByWeekData + 1 > 9 ? idx * SVG_X_LENGTH - 7 : idx * SVG_X_LENGTH - 3}
            >
              {`${monthByWeekData + 1}/${data.week}주`}
            </S.barValue>
          </g>
        )}
        {dayWeekMonthSelect === 'month' && (
          <g>
            <S.barValue holiday={hoilday} y='270' x={idx * SVG_X_LENGTH - 1}>
              {data.year}
            </S.barValue>
            <S.barValue
              holiday={hoilday}
              y='290'
              x={monthByMonthData + 1 > 9 ? idx * SVG_X_LENGTH - 4 : idx * SVG_X_LENGTH - 1}
            >
              {`${monthByMonthData + 1}월`}
            </S.barValue>
          </g>
        )}
        {volumeAndDurationSelect === 'volume' && dayWeekMonthSelect === 'month' ? (
          <g>
            <S.barBalloon
              x={idx * SVG_X_LENGTH - 11}
              y={BALLOON_Y - heightValue < 0 ? BALLOON_Y_OVER : BALLOON_Y_MAX - heightValue}
              rx={RXRY}
              ry={RXRY}
            />
            <S.barBalloonValue
              x={data.volume > 99999 ? idx * SVG_X_LENGTH - 7 : idx * SVG_X_LENGTH - 4}
              y={BALLOON_Y - heightValue < 0 ? BALLOON_VALUE_Y_OVER : BALLOON_VALUE_Y_MAX - heightValue}
            >
              {data.volume.toLocaleString()}
            </S.barBalloonValue>
          </g>
        ) : (
          <g>
            <S.barBalloon
              x={idx * SVG_X_LENGTH - 11}
              y={BALLOON_Y - heightValue < 0 ? BALLOON_Y_OVER : BALLOON_Y_MAX - heightValue}
              rx={RXRY}
              ry={RXRY}
            />
            <S.barBalloonValue
              x={data.volume > 9999 ? idx * SVG_X_LENGTH - 3 : idx * SVG_X_LENGTH + 1}
              y={BALLOON_Y - heightValue < 0 ? BALLOON_VALUE_Y_OVER : BALLOON_VALUE_Y_MAX - heightValue}
            >
              {data.volume.toLocaleString()}
            </S.barBalloonValue>
          </g>
        )}
        {volumeAndDurationSelect === 'duration' &&
          (dayWeekMonthSelect === 'month' ? (
            <g>
              <S.barBalloon
                x={idx * SVG_X_LENGTH - 11}
                y={BALLOON_Y - heightValue < 0 ? BALLOON_Y_OVER : BALLOON_Y_MAX - heightValue}
                rx={RXRY}
                ry={RXRY}
              />
              <S.barBalloonValue
                x={data.duration > 999 ? idx * SVG_X_LENGTH - 3 : idx * SVG_X_LENGTH - 1}
                y={BALLOON_Y - heightValue < 0 ? BALLOON_VALUE_Y_OVER : BALLOON_VALUE_Y_MAX - heightValue}
              >
                {`${data.duration.toLocaleString()}분`}
              </S.barBalloonValue>
            </g>
          ) : (
            <g>
              <S.barBalloon
                x={idx * SVG_X_LENGTH - 11}
                y={BALLOON_Y - heightValue < 0 ? BALLOON_Y_OVER : BALLOON_Y_MAX - heightValue}
                rx={RXRY}
                ry={RXRY}
              />
              <S.barBalloonValue
                x={data.duration > 99 ? idx * SVG_X_LENGTH - 7 : idx * SVG_X_LENGTH - 4}
                y={BALLOON_Y - heightValue < 0 ? BALLOON_VALUE_Y_OVER : BALLOON_VALUE_Y_MAX - heightValue}
              >
                {`${data.duration.toLocaleString()}분`}
              </S.barBalloonValue>
            </g>
          ))}
      </g>
    </g>
  )
}

export default BarChartItem