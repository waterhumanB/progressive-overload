import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const timerModalCounter = styled.div`
  width: 300px;
  height: 350px;
  padding: 15px;
  background: ${colors.BACK};
`

export const timerTitle = styled.div`
  width: 100%;
  margin: 5px auto;
  font-size: 24px;
  color: ${colors.FOCUS};
  font-weight: 600;
  text-align: center;
`

export const chart = styled.div`
  width: 250px;
  height: 250px;
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
  stroke: ${colors.WHITE};
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
  font-size: 80px;
  color: ${colors.BLACK};
  font-weight: 600;
`

export const skipBtn = styled.button`
  width: auto;
  color: ${colors.FONT};
  margin: 10px auto auto auto;
  font-weight: 600;
  font-size: 20px;
  display: flex;

  :hover {
    color: ${colors.FOCUS};
  }
`
