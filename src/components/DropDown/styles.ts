import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const DropBoxContainer = styled.div<{ dropdown: boolean }>`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  background: ${colors.WHITE};
  opacity: ${(props) => (props.dropdown === true ? 1 : 0)};
  transition: 0.7s;
  z-index: ${(props) => (props.dropdown === true ? 2 : -1)};
`

export const DropBoxItem = styled.button<{ dropdown: boolean }>`
  width: 100%;
  height: ${(props) => (props.dropdown === true ? '65px' : 0)};
  overflow: hidden;
  color: ${colors.FONT};
  border-top: 1px solid ${colors.BACK};
  font-size: 22px;
  transition: 0.7s;
  :hover {
    font-weight: bold;
    background: ${colors.FONT};
    color: ${colors.FOCUS};
  }
`
