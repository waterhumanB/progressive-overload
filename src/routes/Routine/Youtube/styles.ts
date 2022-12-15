import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const titleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  .title {
    width: 100%;
    height: 100%;
    font-size: 32px;
    color: ${colors.FOCUS};
  }

  svg {
    fill: ${colors.FONT};
    width: 50px;
    height: 50px;
    transform: scaleX(-1);
    :hover {
      fill: ${colors.FOCUS};
    }
  }
`

export const caegoryCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  svg {
    width: 26px;
    height: 30px;
  }

  .cardBox {
    width: 100%;
    overflow: hidden;
  }
`
export const cardTranslate = styled.div<{ position: number }>`
  display: flex;
  transform: ${(props) => `translateX(-${props.position}px)`};
  transition: 0.7s;
`

export const pageLeftBtn = styled.button<{ position: number }>`
  transform: scaleX(-1);
  fill: ${(props) => (props.position < 50 ? colors.WHITE : colors.FONT)};
  cursor: ${(props) => (props.position < 50 ? 'default' : 'pointer')};
  :focus {
    fill: ${(props) => (props.position < 50 ? colors.WHITE : colors.FOCUS)};
  }
`

export const pageRightBtn = styled.button<{ position: number }>`
  fill: ${(props) => (props.position > 560 ? colors.WHITE : colors.FONT)};
  cursor: ${(props) => (props.position > 560 ? 'default' : 'pointer')};
  :focus {
    fill: ${(props) => (props.position > 560 ? colors.WHITE : colors.FOCUS)};
  }
`

export const categoryBox = styled.button<{ focus: boolean }>`
  color: ${(props) => (props.focus ? colors.WHITE : colors.FONT)};
  margin: auto 3.5px;
  min-width: 80px;
  padding: 7px 3px;
  border: ${(props) => (props.focus ? 0 : `2px solid${colors.BACK}`)};
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
  background: ${(props) => (props.focus ? colors.FONT : colors.WHITE)};
  :hover {
    color: ${colors.WHITE};
    background: ${colors.FONT};
    border: 0;
  }
`
