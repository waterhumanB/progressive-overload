import React from 'react'
import * as S from './stlyes'

interface IDountChartProps {
  percentage: number
  percentageValue: number
  chartValue: string
}

const DountChart = ({ percentage, percentageValue, chartValue }: IDountChartProps) => {
  return (
    <S.chart chartName='default'>
      <S.aniSvg viewBox='0 0 200 200'>
        <S.backCircle cx='100' cy='100' r='90' />
        <S.animatedCircle
          chartName={chartValue}
          cx='100'
          cy='100'
          r='90'
          strokeDasharray={
            chartValue === 'default'
              ? `${2 * Math.PI * 90 * (1 - percentageValue / percentage)} ${
                  2 * Math.PI * 90 * (percentageValue / percentage)
                }`
              : `${2 * Math.PI * 90 * (percentageValue / percentage)} ${
                  2 * Math.PI * 90 * (1 - percentageValue / percentage)
                }`
          }
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
      </S.aniSvg>
      <S.chartValue chartName='default'>
        {percentageValue} {chartValue === 'default' && ''}
      </S.chartValue>
    </S.chart>
  )
}

export default DountChart
