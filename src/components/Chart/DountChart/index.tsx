import React from 'react'
import { useCounter } from '../../../hooks/useCounter'
import * as S from './stlyes'

interface IDountChartProps {
  percentage: number
  percentageValue: number
  chartValueName: string
}

const DountChart = ({ percentage, percentageValue, chartValueName }: IDountChartProps) => {
  const count = useCounter(percentageValue)
  const fetchedPercentageValue = (per: number) => {
    let result = 0
    if (chartValueName === 'Min') {
      result = parseInt(String(per / 60), 10)
    }
    if (chartValueName === 'Kg') {
      result = parseInt(String(per / 1000), 10)
    }
    if (chartValueName === 'Days') {
      result = per
    }
    return result
  }

  const fetchedPercentageValueCount = useCounter(fetchedPercentageValue(percentageValue))

  return (
    <S.chart chartName={chartValueName}>
      <S.aniSvg chartName={chartValueName} preserveAspectRatio='none'>
        <S.backCircle
          chartName={chartValueName}
          cx={chartValueName === 'default' ? '125' : '65'}
          cy={chartValueName === 'default' ? '125' : '65'}
          r={chartValueName === 'default' ? '104' : '55'}
        />
        <S.animatedCircle
          chartName={chartValueName}
          cx={chartValueName === 'default' ? '125' : '65'}
          cy={chartValueName === 'default' ? '125' : '65'}
          r={chartValueName === 'default' ? '104' : '55'}
          strokeDasharray={
            chartValueName === 'default'
              ? `${2 * Math.PI * 104 * (1 - percentageValue / percentage)} ${
                  2 * Math.PI * 104 * (percentageValue / percentage)
                }`
              : `${2 * Math.PI * 55 * (fetchedPercentageValueCount / percentage)} ${
                  2 * Math.PI * 55 * (1 - fetchedPercentageValueCount / percentage)
                }`
          }
          strokeDashoffset={chartValueName === 'default' ? 2 * Math.PI * 104 * 0.25 : 2 * Math.PI * 55 * 0.25}
        />
      </S.aniSvg>
      <S.chartValue chartName={chartValueName}>
        {chartValueName === 'default' ? percentageValue : count}
        <div>{chartValueName === 'default' ? '' : chartValueName}</div>
      </S.chartValue>
    </S.chart>
  )
}

export default DountChart
