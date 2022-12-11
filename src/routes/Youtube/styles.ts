import styled from 'styled-components'
import colors from '../../styles/constants/colors'

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
  fill: ${(props) => (props.position < 50 ? colors.WHITE : colors.BLACK)};
  cursor: ${(props) => (props.position < 50 ? 'default' : 'pointer')};
`

export const pageRightBtn = styled.button<{ position: number }>`
  fill: ${(props) => (props.position > 450 ? colors.WHITE : colors.BLACK)};
  cursor: ${(props) => (props.position > 450 ? 'default' : 'pointer')};
`

export const categoryBox = styled.button`
  color: ${colors.BLACK};
  margin-right: 9.3px;
  min-width: 80px;
  padding: 7px 3px;
  border: 1px solid ${colors.BLACK};
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
  :hover {
    color: ${colors.BLUE};
    border: 1px solid ${colors.BLUE};
  }
  :focus {
    color: ${colors.BLUE};
    border: 1px solid ${colors.BLUE};
  }
`
