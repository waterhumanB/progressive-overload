import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const customSelectorModalContainer = styled.div`
  width: 300px;
  background: ${colors.BACK};
  border: 2px solid ${colors.FONT};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    border-bottom: 1px solid ${colors.FONT};
  }
  button {
    width: 100%;
    height: 40px;
    font-size: 20px;
    color: ${colors.FOCUS};
    :hover {
      font-weight: 600;
      color: ${colors.WHITE};
      background: ${colors.FOCUS};
    }
  }
`
