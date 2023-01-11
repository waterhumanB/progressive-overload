import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const calendarPageContainer = styled.section`
  width: 100%;
`
export const calendarMenuBtnBox = styled.div`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  svg {
    width: 25px;
    height: 25px;
  }
  .left {
    transform: scaleX(-1);
  }

  .yearMenuBox {
    width: 100%;
    display: flex;
  }
  .dataMenuBox {
    width: 100%;
    justify-content: right;
    display: flex;
  }
  .dataMenu {
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
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
