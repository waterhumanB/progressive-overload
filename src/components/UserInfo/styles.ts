import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const formContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    label {
      height: 15px;
      color: ${colors.BLUE};
      font-size: 13px;
      text-align: left;
      font-weight: bold;
    }
  }
`

export const inputText = styled.input`
  height: 40px;
  background: ${colors.WHITE};
  border-bottom: 1px solid ${colors.BLACK};
`

export const radioBox = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 40px;
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
export const vaildatorDiv = styled.div<{ vail: boolean }>`
  font-size: 14px;
  color: ${colors.RED};
  width: 100%;
  text-align: left;
  margin: 5px auto 30px auto;
  opacity: ${(props) => (props.vail ? 1 : 0)};
`

export const submitBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.BLUE};
  :disabled {
    color: ${colors.GRAY};
  }
`
