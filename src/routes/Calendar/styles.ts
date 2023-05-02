import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const calendarPageContainer = styled.section`
  width: 100%;
  height: 100%;
  overflow: scroll;
`
export const calendarMenuBtnBox = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`
export const arrowBtn = styled.button<{ direction: string }>`
  transform: ${(props) => (props.direction === 'left' ? 'scaleX(-1)' : '')};
  svg {
    width: 25px;
    height: 25px;
  }
`

export const yearMenuBox = styled.div`
  width: 100%;
  display: flex;
`
export const dataMenuBox = styled.div`
  width: 100%;
  justify-content: right;
  display: flex;
`

export const dataMenu = styled.div`
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`

export const calendarBox = styled.table`
  width: 100%;
  th {
    height: 30px;
  }
`
export const tableHead = styled.thead`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  color: ${colors.FOCUS};

  .sun {
    color: ${colors.RED};
  }
  .sat {
    color: ${colors.BLUE};
  }
`

export const weekendTable = styled.th<{ weekend: number }>`
  color: ${(props) => (props.weekend === 0 && colors.RED) || (props.weekend === 6 && colors.BLUE)};
`
