import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const navFooter = styled.footer`
  font-weight: bold;
  font-size: 18px;
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  border-top: 2px solid ${colors.BACK};
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  a {
    margin: 5px auto;
    color: ${colors.FONT};
  }

  .active {
    color: ${colors.FOCUS};
  }
`
