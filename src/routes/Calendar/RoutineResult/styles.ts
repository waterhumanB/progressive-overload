import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routinefinishContainer = styled.section`
  width: 100%;
  padding: 20px;
`

export const routineTitleBox = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
`
export const titleDiv = styled.div`
  font-size: 26px;
  color: ${colors.FOCUS};
`
export const dateDiv = styled.div`
  font-size: 18px;
  color: ${colors.FONT};
`

export const routineHandlerBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 10px;
`

export const leftBtn = styled.button`
  svg {
    width: 30px;
    height: 30px;
    transform: scaleX(-1);
  }
  :disabled {
    cursor: default;
    opacity: 0;
  }
`
export const rightBtn = styled.button`
  svg {
    width: 30px;
    height: 30px;
  }
  :disabled {
    cursor: default;
    opacity: 0;
  }
`

export const routineResultBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`

export const homeRouterBtnBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  button {
    height: 30px;
    margin: auto;
    font-weight: 600;
    font-size: 20px;
    color: ${colors.GRAY};
    :hover {
      color: ${colors.FOCUS};
    }
  }
`
