import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const customPageContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const customTitleBox = styled.div`
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

export const customDataBox = styled.div`
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

export const customInput = styled.div<{ inputValue: boolean }>`
  width: 100%;
  height: 40px;
  background: ${(props) => (props.inputValue ? colors.WHITE : colors.BACK)};
  margin-bottom: 80px;
  border: 2px solid ${colors.BACK};
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

export const customExerciseAddBtn = styled.button`
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
