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
