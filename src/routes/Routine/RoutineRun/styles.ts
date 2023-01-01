import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routineRunContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`
export const routineRunBox = styled.div`
  width: 100%;
  padding: 20px;
`

export const routineRunTitleBox = styled.div`
  width: 100%;
  margin: auto;

  div {
    width: 100%;
    margin: auto;
    font-weight: 600;
    text-align: center;
  }
  .category {
    font-size: 26px;
    color: ${colors.FOCUS};
  }
  .target {
    margin-top: 10px;
    font-size: 20px;
    color: ${colors.FONT};
  }
`

export const routineRunWorkout = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`

export const routineRunRecord = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 600;
  div {
    width: 50px;
    text-align: center;
  }
`

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
