import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const currentRoutineCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 5px;
`
export const routineCardBox = styled.div`
  width: 100%;
`
export const cardData = styled.button`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  border: 2px solid ${colors.BACK};
  background: ${colors.BACK};
  font-size: 16px;
  align-items: center;
  svg {
    margin-left: 5px;
    width: 40px;
    height: 40px;
    path {
      fill: ${colors.FONT};
    }
  }
  :hover {
    border: 2px solid ${colors.FONT};
    path {
      fill: ${colors.FOCUS};
    }
  }
`

export const routineDataBox = styled.div`
  width: 100%;
  margin-right: 45px;
  font-weight: 600;
`

export const routineTitle = styled.div`
  width: 100%;
  font-size: 20px;
  color: ${colors.FOCUS};
`
export const routineDate = styled.div`
  width: 100%;
  color: ${colors.FONT};
`
