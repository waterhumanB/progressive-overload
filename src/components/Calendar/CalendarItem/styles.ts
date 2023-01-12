import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const calendarTbody = styled.tbody`
  width: 100%;
`
export const todayRoutine = styled.td<{ dataSelector: boolean; dataValue: number }>`
  height: 50px;
  background: ${(props) =>
    props.dataSelector
      ? (props.dataValue === 0 && `${colors.WHITE}`) ||
        (props.dataValue < 4000 && `${colors.BLUE5}`) ||
        (props.dataValue > 4000 && props.dataValue < 8000 && `${colors.BLUE4}`) ||
        (props.dataValue > 8000 && props.dataValue < 12000 && `${colors.BLUE3}`) ||
        (props.dataValue > 12000 && props.dataValue < 16000 && `${colors.BLUE2}`) ||
        (props.dataValue > 16000 && props.dataValue < 20000 && `${colors.BLUE1}`) ||
        (props.dataValue > 20000 && `${colors.BLUE}`)
      : (props.dataValue === 0 && `${colors.WHITE}`) ||
        (props.dataValue < 30 && `${colors.PURPLE5}`) ||
        (props.dataValue > 30 && props.dataValue < 60 && `${colors.PURPLE4}`) ||
        (props.dataValue > 60 && props.dataValue < 90 && `${colors.PURPLE3}`) ||
        (props.dataValue > 90 && props.dataValue < 120 && `${colors.PURPLE2}`) ||
        (props.dataValue > 120 && props.dataValue < 150 && `${colors.PURPLE1}`) ||
        (props.dataValue > 150 && `${colors.PURPLE}`)};
  :hover {
    transform: ${(props) => (props.dataValue !== 0 ? 'scale(1.1)' : '')};
    transition: 0.3s;
  }
  button {
    width: 100%;
    height: 100%;
    cursor: ${(props) => (props.dataValue === 0 ? 'default' : '')};
    div {
      width: 100%;
      height: 100%;
      font-weight: 600;
      margin-top: 0;
    }
  }
  .sun {
    color: ${colors.RED};
  }
  .sat {
    color: ${colors.BLUE};
  }
`
export const currentMonthdate = styled.div<{ currentMonthOfDate: boolean }>`
  font-size: 16px;
  opacity: ${(props) => (!props.currentMonthOfDate ? '0.4' : '')};
`
