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

export const submitBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.BLUE};
  :disabled {
    color: ${colors.GRAY};
  }
  a {
    color: ${colors.BLUE};
  }
`
