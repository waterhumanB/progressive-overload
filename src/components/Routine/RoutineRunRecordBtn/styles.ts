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

    :disabled {
      color: ${colors.FONT};
      fill: ${colors.FONT};
      transition: 0.2s;
    }

    span {
      font-size: 16px;
      font-weight: 600;
      width: 100%;
    }
  }

  .setMinus {
    color: ${colors.GRAY};
    fill: ${colors.GRAY};
  }

  .setPlus {
    color: ${colors.BLUE};
    fill: ${colors.BLUE};
  }

  .doubeCheck {
    color: ${colors.BRIGHT_GREEN};
    path {
      fill: ${colors.BRIGHT_GREEN};
    }
  }

  .nextSet {
    color: ${colors.RED};
    fill: ${colors.RED};
  }
`
