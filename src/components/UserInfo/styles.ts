import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const formContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    label {
      height: 17px;
      color: ${colors.FOCUS};
      font-size: 14px;
      text-align: left;
      font-weight: bold;
    }
  }
`

export const submitBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.FOCUS};
  :disabled {
    color: ${colors.FONT};
  }
  a {
    color: ${colors.FOCUS};
  }
`
