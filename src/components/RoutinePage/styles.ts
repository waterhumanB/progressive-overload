import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const routinePageConatiner = styled.section`
  width: 100%;
  height: 100%;
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
  height: 85%;
  margin: auto;
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
  height: 40px;
  background: ${(props) => (props.inputValue ? colors.WHITE : colors.BACK)};
  margin-bottom: 10px;
  border: ${(props) => (props.inputValue ? `2px solid ${colors.BACK}` : `1px solid ${colors.FOCUS}`)};
  input {
    color: ${colors.FOCUS};
    font-weight: 600;
    width: 100%;
    height: 100%;
    text-align: center;
    ::placeholder {
      color: ${colors.FONT};
    }
  }
`

export const exerciseBox = styled.div`
  width: 100%;
  max-height: 70vh;
  overflow: scroll;
`

export const exerciseCard = styled.div`
  border: 1px solid ${colors.BACK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  background: ${colors.BACK};
  border: 1px solid ${colors.FOCUS};
`

export const mainTaget = styled.div`
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
