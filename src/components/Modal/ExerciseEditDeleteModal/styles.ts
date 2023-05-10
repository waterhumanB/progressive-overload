import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/constants/colors'

export const exerciseEditDeleteModalContainer = styled.div`
  width: 300px;
  background: ${colors.BACK};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${colors.FOCUS};
`

export const exerciseEditDeleteTitle = styled.div`
  width: 100%;
  font-size: 20px;
  padding: 20px;
  color: ${colors.FOCUS};
  font-weight: 600;
  text-align: center;
`

export const exerciseEditDeleteBtnBox = styled.div`
  width: 100%;
  display: flex;

  button {
    width: 100%;
    height: 40px;
    font-size: 18px;
    color: ${colors.FOCUS};
    border-top: 1px solid ${colors.FONT};

    :hover {
      font-weight: 600;
      color: ${colors.WHITE};
      background: ${colors.FOCUS};
      border: 1px solid ${colors.FOCUS};
    }
  }
`
export const selectExerciseContainer = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`

export const selectExerciseBtn = styled.button<{ hidden: boolean; direction: string }>`
  margin: auto;
  cursor: ${(props) => (props.hidden ? 'default' : '')};

  svg {
    width: 30px;
    height: 40px;
    fill: ${colors.FONT};
    transform: ${(props) => (props.direction === 'left' ? 'scaleX(-1)' : '')};
  }
  :hover {
    svg {
      fill: ${colors.FOCUS};
    }
  }
`

export const noExercise = styled.div`
  padding: 20px;
  margin: auto;
  font-size: 20px;
  color: ${colors.FOCUS};
`

export const selectExerciseBox = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
`
const animation = keyframes`
to { transform: scale(1.05)}
`

export const selectExerciseItem = styled.div`
  width: 100%;
  padding: 15px 0;
  margin: auto;
  animation-name: ${animation};
  animation-duration: 0.3s;

  div {
    display: flex;
    justify-content: center;
  }
`

export const selectExerciseTitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: ${colors.FOCUS};
  font-weight: 600;
  :nth-child(0) {
    margin-right: 5px;
  }
`

export const selectExerciseTarget = styled.div`
  margin-top: 10px;
  color: ${colors.FONT};
  font-weight: 600;
`
