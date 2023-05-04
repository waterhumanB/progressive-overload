import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const routineContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background: ${colors.WHITE};
  position: relative;
`
export const userContainer = styled.div`
  display: flex;
  justify-content: space-around;
  .nickName {
    color: ${colors.FOCUS};
    font-weight: bold;
    font-size: 30px;
  }
  .info {
    color: ${colors.FONT};
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
`

export const userBox = styled.div`
  justify-content: left;
  text-align: center;
  align-items: center;
  margin: 20px 0 25px 0;
  display: flex;
`
export const subMenuContainer = styled.div`
  color: ${colors.FOCUS};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  .youtube {
    color: ${colors.FONT};
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 5px 7px;
    border: 1px solid ${colors.FONT};
    border-radius: 12px;
    z-index: 2;
    :hover {
      color: ${colors.WHITE};
      border: 1px solid ${colors.FOCUS};
      background: ${colors.FOCUS};
      transition: 0.4s;
    }
  }

  .logo {
    margin-right: 10px;
  }
`

export const routineBox = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
`
export const noRoutineData = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-size: 20px;
  color: ${colors.FOCUS};
  font-weight: 600;
`

export const routineCard = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${colors.BACK};
  margin-bottom: 7px;
  background: ${colors.BACK};
  transition: 0.3s;
  :hover {
    border: 2px solid ${colors.FOCUS};
  }
`

export const routineWorkoutCount = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  background: ${colors.WHITE};
  color: ${colors.FOCUS};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  margin-left: 5px;
`

export const routineInfoBtn = styled.button`
  width: 70%;
  margin: auto;
  text-align: center;
`
export const routineTitle = styled.div`
  color: ${colors.FOCUS};
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  div:nth-child(1) {
    margin-right: 5px;
  }
`

export const routineRecent = styled.div`
  margin-top: 2px;
  color: ${colors.FONT};
  font-weight: 600;
  display: flex;
  font-size: 14px;
  justify-content: center;

  div:nth-child(2) {
    margin-left: 5px;
  }
`
export const routineMenuBtn = styled.button`
  margin-right: 3px;
  svg {
    width: 40px;
    height: 40px;
    path {
      fill: ${colors.FOCUS};
    }
  }
`
