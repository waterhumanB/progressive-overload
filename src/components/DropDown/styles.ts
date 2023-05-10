import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const DropDownContainer = styled.div<{ dropdown: boolean }>`
  max-width: 430px;
  height: 100%;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.GRAY};
  background-color: rgba(0, 0, 0, 0.2);
  transition: 0.4s;
  cursor: default;
  opacity: ${(props) => (props.dropdown === true ? 1 : 0)};
  z-index: ${(props) => (props.dropdown === true ? 2 : -1)};
`

export const DropDownBox = styled.div<{ dropdown: boolean }>`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  background: ${colors.WHITE};
  opacity: ${(props) => (props.dropdown === true ? 1 : 0)};
  transition: 0.4s;
  z-index: ${(props) => (props.dropdown === true ? 2 : -1)};
`

export const DropDownItem = styled.button<{ dropdown: boolean }>`
  width: 100%;
  height: ${(props) => (props.dropdown === true ? '65px' : 0)};
  overflow: hidden;
  color: ${colors.FONT};
  border-top: 1px solid ${colors.BACK};
  font-size: 22px;
  transition: 0.4s;
  :hover {
    font-weight: bold;
    background: ${colors.FONT};
    color: ${colors.FOCUS};
    border-top: 1px solid ${colors.FONT};
  }
`
