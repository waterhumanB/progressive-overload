import styled, { keyframes } from 'styled-components'
import colors from '../../styles/constants/colors'

const fadeInRight = keyframes`
from {
  opacity: 0;
  transform: translateX(-20px);
}
to {
  opacity: 1;
}
`
const fadeInLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(20px);
}
to {
  opacity: 1;
}
`

export const homeContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
`

export const pageBtn = styled.button<{ direction: string }>`
  fill: ${colors.FONT};

  svg {
    width: 35px;
    height: 35px;
    transform: ${(props) => (props.direction === 'left' ? 'scaleX(-1)' : '')};
  }

  :hover {
    fill: ${colors.FOCUS};
  }
`

export const decContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  a {
    color: ${colors.BLACK};
    text-decoration: none;
    outline: none;
  }
`

export const decBox = styled.div<{ view: string }>`
  text-align: center;
  margin: 20px;
  margin: auto;
  transition: 1ms;
  animation-name: ${(props) => (props.view === 'left' ? fadeInLeft : fadeInRight)};
  animation-duration: 1s;

  span {
    color: ${colors.FOCUS};
    line-height: 50px;
    font-size: 28px;
    font-weight: 500;
  }
`

export const orderBox = styled.div`
  width: 100px;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  justify-content: space-between;

  @media (max-height: 650px) {
    display: none;
  }
`

export const orderZero = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.FONT};
  background: ${(props) => (props.view === 0 ? colors.FOCUS : colors.WHITE)};
`

export const orderOne = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.FONT};
  background: ${(props) => (props.view === 1 ? colors.FOCUS : colors.WHITE)};
`
export const orderTwo = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.FONT};
  background: ${(props) => (props.view === 2 ? colors.FOCUS : colors.WHITE)};
`

export const orderThr = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.FONT};
  background: ${(props) => (props.view === 3 ? colors.FOCUS : colors.WHITE)};
`
