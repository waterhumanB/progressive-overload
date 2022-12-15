import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const customSelector = styled.button`
  width: 100%;
  height: 40px;
  background: ${colors.WHITE};
  border: 2px solid ${colors.BACK};
  color: ${colors.FOCUS};
  font-size: 16px;
  margin-bottom: 80px;
  align-items: center;
  display: flex;
  div {
    font-weight: 600;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`
