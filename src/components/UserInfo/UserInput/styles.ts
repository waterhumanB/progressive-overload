import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const inputTextBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const inputText = styled.input`
  height: 40px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.BLACK};
`

export const vaildatorDiv = styled.div<{ vail: boolean }>`
  font-size: 12px;
  color: ${colors.RED};
  width: 100%;
  text-align: left;
  margin: 5px auto 30px auto;
  opacity: ${(props) => (props.vail ? 1 : 0)};
`

export const radioBox = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  div {
    margin-right: 25px;
  }
`

export const inputRadio = styled.input`
  border-radius: 20px;
  width: 20px;
  height: 20px;
  background: ${colors.WHITE};
  border: 1px solid ${colors.BLACK};
  margin: auto 5px auto 7px;
  cursor: pointer;
  :checked {
    background: ${colors.BLUE};
  }
`
