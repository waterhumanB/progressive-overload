import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const barChartBox = styled.svg`
  width: 400px;
  height: 400px;
`

export const bar = styled.rect<{ barValue: string; heightValue: number }>`
  y: ${(props) => `${250 - props.heightValue}px`};
  width: 13px;
  height: ${(props) => `${props.heightValue}px`};
  fill: ${(props) => (props.barValue === 'volume' ? colors.BLUE1 : colors.PURPLE1)};
`
export const animatedBar = styled.rect<{ heightValue: number }>`
  y: ${(props) => `${250 - props.heightValue}px`};
  width: 50px;
  height: ${(props) => `${props.heightValue}px`};
  opacity: 0;
  fill: ${colors.WHITE};
  @keyframes rotation {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 1;
    }
    100% {
      height: 0;
    }
  }
  animation: rotation 0.6s linear;
`
export const barValue = styled.text<{ holiday: string }>`
  width: 30px;
  height: 10px;
  display: block;
  font-weight: 600;
  fill: ${(props) =>
    (props.holiday === '토요일' && colors.BLUE) ||
    (props.holiday === '일요일' && colors.RED) ||
    (props.holiday && colors.FOCUS)};
`
export const barBalloon = styled.rect`
  width: 60px;
  height: 30px;
  fill: ${colors.BLACK};
`
export const barBalloonValue = styled.text`
  fill: ${colors.WHITE};
  font-size: 16px;
`
