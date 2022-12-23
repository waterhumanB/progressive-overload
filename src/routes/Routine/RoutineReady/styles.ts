import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routinePageConatiner = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
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

export const exerciseBox = styled.div`
  width: 100%;
  max-height: 70vh;
  overflow: scroll;
`

const maringUp = keyframes`
from {width :100%}
to{width: 300px}
`
const sorted = keyframes`
from {transform: scaleY(0.2)}
to {transform: scaleY(1)}
`

export const exerciseCard = styled.div<{ dragOverPosition: boolean; dropPosition: boolean }>`
  border: 1px solid ${colors.BACK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  background: ${colors.BACK};
  border: 1px solid ${colors.FOCUS};
  animation-name: ${(props) => (props.dragOverPosition && maringUp) || (props.dropPosition && sorted)};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
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

export const exerciseTarget = styled.div`
  color: ${colors.FONT};
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  div:nth-child(2) {
    margin-left: 5px;
  }
`

export const routineStartBtn = styled.button`
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
