import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routineRecordSetContainer = styled.div`
  width: 100%;
  height: 380px;
`

export const routineRecordSetBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.FOCUS};

  input {
    width: 50px;
    height: 28px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: ${colors.FOCUS};
  }
  div {
    width: 50px;
  }
`

export const routineKgRabInput = styled.input<{ range: number }>`
  width: 100%;
  border: ${(props) => (props.range > 0 ? `2px solid ${colors.FOCUS}` : `2px solid ${colors.BACK}`)};
  border-radius: 7px;
`

export const routineFinishBox = styled.div<{ checked: boolean }>`
  border: ${(props) => (props.checked ? `2px solid ${colors.FOCUS}` : `2px solid ${colors.BACK}`)};
  border-radius: 7px;
  position: relative;
  z-index: 1;
  transition: 0.2s;
  svg {
    z-index: -1;
    opacity: 0;
    width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
    fill: ${colors.FOCUS};
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 7px;
    cursor: pointer;

    :checked {
      ~ svg {
        opacity: 1;
        transition: 0.2s;
      }
    }
  }
`
