import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const chart = styled.div<{ chartName: string }>`
  width: ${(props) => (props.chartName === 'default' ? '250px' : '150px')};
  height: ${(props) => (props.chartName === 'default' ? '250px' : '150px')};
  margin: auto;
  position: relative;
  padding: 10px;
`

export const aniSvg = styled.svg`
  position: relative;

  circle {
    fill: none;
    stroke-width: 20;
  }
`

export const backCircle = styled.circle`
  stroke: ${colors.BACK};
`

export const animatedCircle = styled.circle<{ chartName: string }>`
  transition: 1.1s linear;
  stroke: ${(props) =>
    (props.chartName === 'default' && colors.DEEP_BLUE) ||
    (props.chartName === 'Min' && colors.PURPLE1) ||
    (props.chartName === 'Kg' && colors.BRIGHT_GREEN) ||
    (props.chartName === 'Days' && colors.BLUE1)};
`

export const chartValue = styled.div<{ chartName: string }>`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => (props.chartName === 'default' ? '80px' : '20px')};
  color: ${colors.BLACK};
  font-weight: 600;
  text-align: center;
  div {
    font-size: 16px;
    color: ${colors.GRAY};
  }
`
