import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const recordCardContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  .title {
    margin-bottom: 10px;
    color: ${colors.FOCUS};
    font-size: 18px;
    font-weight: 600;
  }
`

export const recordCardbox = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
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
  transform: ${(props) => `translateX(${props.translateX}px)`};
`

export const setItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;

  .order {
    margin-right: 5px;

    .dash {
      color: ${colors.RED};
    }
  }

  .kgAndRab {
    margin: auto 3px;
    font-size: 15px;
    color: ${colors.FONT};
  }
`
