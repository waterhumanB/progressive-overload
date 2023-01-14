import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const chartConatiner = styled.div`
  width: 100%;
  display: flex;
`

export const chart = styled.div`
  width: 150px;
  height: 150px;
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
  stroke: ${colors.GRAY};
`

export const animatedCircle = styled.circle`
  transition: 1.1s linear;
  stroke: ${colors.DEEP_BLUE};
`

export const timerCount = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: ${colors.BLACK};
  font-weight: 600;
`
