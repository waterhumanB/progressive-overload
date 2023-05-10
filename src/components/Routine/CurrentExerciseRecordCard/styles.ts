import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const recordCardContainer = styled.div`
  width: 100%;
  margin: 10px auto;
`

export const recordCardTitle = styled.div`
  margin-bottom: 10px;
  color: ${colors.FOCUS};
  font-size: 18px;
  font-weight: 600;
`

export const recordCardBox = styled.div`
  width: 100%;
  min-height: 80px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
`

export const cardDate = styled.div`
  width: 100%;
  color: ${colors.BLACK};
  font-weight: 600;
  margin-bottom: 5px;
`

export const cardItem = styled.div<{ translateX: number }>`
  width: 100%;
  text-align: center;
  margin-right: 10px;
  transform: ${(props) => `translateX(${props.translateX}px)`};
  transition: ${(props) => `${props.translateX ? 0 : 300}ms ease-in-out 0s`};
`

export const setItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
`

export const orderBox = styled.div`
  width: 30px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
`

export const order = styled.div`
  width: 20px;
`

export const dash = styled.div`
  color: ${colors.RED};
  margin-left: 3px;
`

export const record = styled.div`
  display: flex;
`

export const item = styled.div`
  width: 30px;
  text-align: right;
`

export const kgAndRab = styled.div`
  width: 20px;
  margin: auto 2px;
  font-size: 15px;
  color: ${colors.FONT};
`

export const noRecord = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: center;
  color: ${colors.FONT};
  font-weight: 600;
`
