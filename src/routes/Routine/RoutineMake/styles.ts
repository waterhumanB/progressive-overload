import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const makeRoutineContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 10px 15px 0 15px;
  position: relative;
`

export const makeRoutineTitle = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 20px;
  div {
    width: 100%;
    color: ${colors.FONT};
    font-weight: 600;
    font-size: 27px;
    text-align: center;
  }
  svg {
    fill: ${colors.FONT};
    position: absolute;
    width: 45px;
    height: 45px;
    left: -10px;
    bottom: 12px;
    transform: scaleX(-1);
    :hover {
      fill: ${colors.FOCUS};
    }
  }
`

export const filterBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.BACK};
  background: ${colors.BACK};
  margin-bottom: 15px;
  svg {
    width: 24px;
    height: 35px;
  }
  input {
    width: 90%;
  }
`
export const addBtnBox = styled.button`
  display: flex;
  padding: 0 5px 10px 5px;
  margin: auto;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 400;
    margin: auto 10px;
    font-size: 16px;
    color: ${colors.FONT};
  }
  svg {
    width: 30px;
    height: 30px;
  }

  :hover {
    span {
      color: ${colors.FOCUS};
      font-weight: 600;
    }
    div {
      background: ${colors.FOCUS};
    }
    svg {
      g > :first-child {
        fill: ${colors.FOCUS};
      }
    }
  }
`

export const upAndRoutineAddBtnBox = styled.div`
  width: 100%;
  height: 55px;
  margin: auto;
`
export const btnPositionBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: 55px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.WHITE};
`
export const upExerciseListBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: ${colors.FONT};
  svg {
    width: 25px;
    height: 25px;
    path {
      fill: ${colors.WHITE};
    }
  }
`
export const routineAddBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  width: 180px;
  border-radius: 15px;
  background: ${colors.FOCUS};
  color: ${colors.BACK};
  :disabled {
    font-weight: 400;
    border: 2px solid ${colors.BACK};
    color: ${colors.FONT};
    background: ${colors.WHITE};
  }
`
