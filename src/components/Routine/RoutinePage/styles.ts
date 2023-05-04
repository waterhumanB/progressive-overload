import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routinePageContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`
export const routineTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${colors.FONT};
    width: 50px;
    height: 50px;
    transform: scaleX(-1);
    :hover {
      fill: ${colors.FOCUS};
    }
  }

  div {
    margin: auto;
    font-size: 30px;
    color: ${colors.FONT};
    font-weight: 600;
  }
`
export const routineDataBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .focus {
    background: ${colors.BACK};
    input {
      color: ${colors.FOCUS};
    }
  }
`

export const routineInput = styled.div<{ inputValue: boolean }>`
  width: 100%;
  height: 60px;
  background: ${(props) => (props.inputValue ? colors.WHITE : colors.BACK)};
  margin-bottom: 15px;
  border: ${(props) => (props.inputValue ? `2px solid ${colors.BACK}` : `1px solid ${colors.FOCUS}`)};
  input {
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: ${colors.FOCUS};
    ::placeholder {
      color: ${colors.FONT};
    }
  }
`

export const exerciseBox = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
`

export const exerciseCard = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background: ${colors.BACK};
`

export const mainTarget = styled.div`
  color: ${colors.FOCUS};
  font-weight: 600;
  font-size: 13px;
  width: 35px;
  height: 35px;
  border-radius: 30px;
  background: ${colors.WHITE};
  margin-left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${colors.FOCUS};
    }
  }
`

export const exerciseInfo = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
`
export const exerciseTitle = styled.div`
  color: ${colors.FOCUS};
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  div:nth-child(1) {
    margin-right: 5px;
  }
`
export const btnBox = styled.div`
  width: 100%;
  max-width: 390px;
  bottom: 10px;
  position: fixed;
`

export const editBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const routineEditBtn = styled.button`
  width: 150px;
  height: 40px;
  background: ${colors.FOCUS};
  border: 2px solid ${colors.BACK};
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 16px;
  :disabled {
    border: 2px solid ${colors.BACK};
    color: ${colors.FONT};
    background: ${colors.WHITE};
  }
`
export const exerciseEditBtn = styled.button`
  width: 150px;
  height: 40px;
  background: ${colors.FOCUS};
  border: 2px solid ${colors.BACK};
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 16px;
  :disabled {
    border: 2px solid ${colors.BACK};
    color: ${colors.FONT};
    background: ${colors.WHITE};
  }
`
export const routineAddBtn = styled.button`
  width: 100%;
  height: 40px;
  background: ${colors.FOCUS};
  border: 2px solid ${colors.BACK};
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 16px;
  :disabled {
    border: 2px solid ${colors.BACK};
    color: ${colors.FONT};
    background: ${colors.WHITE};
  }
`
