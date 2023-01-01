import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/constants/colors'

export const timerModalCounter = styled.div`
  width: 300px;
  height: 300px;
  background: ${colors.BACK};
`

export const Chart = styled.div`
  width: 250px;
  height: 250px;
  margin: auto;
  position: relative;
  padding: 10px;
`

export const AniSvg = styled.svg`
  position: relative;
`

export const AnimatedCircle = styled.circle`
  transition: 1.1s linear;
  stroke: ${colors.BLUE};
`

export const Percent = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  color: ${colors.BLUE};
  font-weight: 600;
`
