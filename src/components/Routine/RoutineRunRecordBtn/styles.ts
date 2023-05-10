import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routineRunRecordBtnBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  svg {
    width: 30px;
    height: 30px;
  }

  button {
    width: 130px;
    text-align: center;
    align-items: center;
    display: flex;
    transition: 0.2s;

    span {
      font-size: 16px;
      font-weight: 600;
      width: 100%;
    }
  }
`
export const setMinus = styled.button`
  color: ${colors.GRAY};
  fill: ${colors.GRAY};
`

export const setPlus = styled.button`
  color: ${colors.BLUE};
  fill: ${colors.BLUE};
`

export const allCheck = styled.button`
  color: ${colors.BRIGHT_GREEN};
  path {
    fill: ${colors.BRIGHT_GREEN};
  }
`

export const nextSet = styled.button`
  color: ${colors.RED};
  fill: ${colors.RED};

  :disabled {
    color: ${colors.FONT};
    fill: ${colors.FONT};
    transition: 0.2s;
  }
`
