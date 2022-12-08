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

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
`

export const pageBtn = styled.button`
  .right {
    width: 35px;
    height: 35px;
  }
  .left {
    width: 35px;
    height: 35px;

    transform: scaleX(-1);
  }
`

export const DecContainer = styled.div`
  height: 100%;
  display: flex;
  a {
    color: ${colors.BLACK};
    text-decoration: none;
    outline: none;
  }
`

export const DecBox = styled.div<{ view: string }>`
  text-align: center;
  margin: 20px;
  margin: auto;
  transition: 1ms;
  animation-name: ${(props) => (props.view === 'left' ? fadeInLeft : fadeInRight)};
  animation-duration: 1s;

  span {
    line-height: 50px;
    font-size: 28px;
    font-weight: 500;
  }
`

export const OrderBox = styled.div`
  width: 100px;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  justify-content: space-between;
`

export const OrderZero = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.GRAY};
  background: ${(props) => (props.view === 0 ? colors.BLACK : colors.WHITE)};
`

export const OrderOne = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.GRAY};
  background: ${(props) => (props.view === 1 ? colors.BLACK : colors.WHITE)};
`
export const OrderTwo = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.GRAY};
  background: ${(props) => (props.view === 2 ? colors.BLACK : colors.WHITE)};
`

export const OrderThr = styled.button<{ view: number }>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.GRAY};
  background: ${(props) => (props.view === 3 ? colors.BLACK : colors.WHITE)};
`
