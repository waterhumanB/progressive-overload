import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routineTimerContainer = styled.footer`
  width: 400px;
  height: 55px;
  padding-top: 10px;
  border-top: 2px solid ${colors.BACK};
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  font-weight: 600;
  background: ${colors.WHITE};

  button {
    font-size: 16px;
    font-weight: 600;
  }

  .plus {
    color: ${colors.BLUE};
  }
  .minus {
    color: ${colors.GRAY};
  }
  .reset {
    color: ${colors.RED};
  }
`
export const setTimerBox = styled.div`
  width: 60px;
  text-align: center;

  .restTime {
    font-size: 12px;
    margin-bottom: 5px;
    color: ${colors.FONT};
  }
  .seconds {
    color: ${colors.FOCUS};
    font-size: 20px;
  }
`
