import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routineTimerContainer = styled.footer`
  max-width: 430px;
  width: 100%;
  height: 55px;
  padding-top: 10px;
  border-top: 2px solid ${colors.BACK};
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  font-weight: 600;
  background: ${colors.WHITE};
`

export const timerBtn = styled.button<{ calculation: string }>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) =>
    (props.calculation === 'minus' && colors.GRAY) ||
    (props.calculation === 'plus' && colors.BLUE) ||
    (props.calculation === 'reset' && colors.RED)};
`

export const setTimerBox = styled.div`
  width: 60px;
  text-align: center;
`
export const restTime = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  color: ${colors.FONT};
`

export const seconds = styled.div`
  color: ${colors.FOCUS};
  font-size: 20px;
`
