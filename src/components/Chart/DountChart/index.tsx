import React from 'react'
import * as S from './stlyes'

interface IDountChartProps {
  percentage: number
  percentageValue: number
  chartValueName: string
}

const DountChart = ({ percentage, percentageValue, chartValueName }: IDountChartProps) => {
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
  return (
    <S.chart chartName={chartValueName}>
      <S.aniSvg viewBox='0 0 200 200'>
        <S.backCircle chartName={chartValueName} cx='100' cy='100' r='90' />
        <S.animatedCircle
          chartName={chartValueName}
          cx='100'
          cy='100'
          r='90'
          strokeDasharray={
            chartValueName === 'default'
              ? `${2 * Math.PI * 90 * (1 - percentageValue / percentage)} ${
                  2 * Math.PI * 90 * (percentageValue / percentage)
                }`
              : `${2 * Math.PI * 90 * (fetchedPercentageValue(percentageValue) / percentage)} ${
                  2 * Math.PI * 90 * (1 - fetchedPercentageValue(percentageValue) / percentage)
                }`
          }
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
      </S.aniSvg>
      <S.chartValue chartName={chartValueName}>
        {percentageValue} <div>{chartValueName === 'default' ? '' : chartValueName}</div>
      </S.chartValue>
    </S.chart>
  )
}

export default DountChart
