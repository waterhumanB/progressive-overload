import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const makeRountineContainer = styled.section`
  width: 100%;
  padding: 10px 15px;
  position: relative;
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
  padding: 5px 5px;
  margin: auto auto 10px auto;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 400;
    margin: auto 10px;
    font-size: 16px;
    color: ${colors.FONT};
  }
  :hover {
    span {
      color: ${colors.FOCUS};
      font-weight: 600;
    }
    div {
      background: ${colors.FOCUS};
    }
  }
`

export const addBtn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 20px;
  font-size: 30px;
  color: ${colors.WHITE};
  font-weight: bold;
  background: ${colors.FONT};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const upAndRoutineAddBtnBox = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`
export const upExerciseListBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-left: 10px;
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
