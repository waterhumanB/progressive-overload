import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const inputTextBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const inputText = styled.input`
  height: 40px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.FONT};
`

export const vaildatorDiv = styled.div<{ vail: boolean }>`
  font-size: 12px;
  color: ${colors.WARING};
  width: 100%;
  text-align: left;
  margin: 5px auto 30px auto;
  opacity: ${(props) => (props.vail ? 1 : 0)};
`

export const radioBox = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  div {
    color: ${colors.FOCUS};
    margin-right: 25px;
  }
`

export const inputRadio = styled.input`
  border-radius: 20px;
  width: 20px;
  height: 20px;
  background: ${colors.WHITE};
  border: 1px solid ${colors.BACK};
  margin: auto 5px auto 7px;
  cursor: pointer;
  :checked {
    background: ${colors.FOCUS};
  }
`
