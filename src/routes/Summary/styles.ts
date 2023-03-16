import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const donutChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`
export const barChartContainer = styled.div`
  width: 100%;
  display: flex;
`
export const yAxis = styled.div`
  height: 250px;
  padding-right: 5px;
  border-right: 2px solid ${colors.FONT};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  font-weight: 600;
  color: ${colors.BLACK};
  div {
    width: 47px;
    text-align: right;
  }
`
export const dateRangeBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`

export const daySelectBtn = styled.button<{ date: string; data: string }>`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => {
    if (props.date === 'day' && props.data === 'volume') {
      return colors.BLUE
    }
    if (props.date === 'day' && props.data === 'duration') {
      return colors.PURPLE
    }
    return colors.FONT
  }};
`

export const weekSelectBtn = styled.button<{ date: string; data: string }>`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => {
    if (props.date === 'week' && props.data === 'volume') {
      return colors.BLUE
    }
    if (props.date === 'week' && props.data === 'duration') {
      return colors.PURPLE
    }
    return colors.FONT
  }};
`

export const monthSelectBtn = styled.button<{ date: string; data: string }>`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => {
    if (props.date === 'month' && props.data === 'volume') {
      return colors.BLUE
    }
    if (props.date === 'month' && props.data === 'duration') {
      return colors.PURPLE
    }
    return colors.FONT
  }};
`
export const selectDataBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
export const selectVolumeBtn = styled.button<{ selected: string }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.selected === 'volume' ? colors.BLUE : colors.FONT)};
`
export const selectDurationBtn = styled.button<{ selected: string }>`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.selected === 'duration' ? colors.PURPLE : colors.FONT)};
`

export const mockDataBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export const mockDataBtn = styled.button`
  max-width: 250px;
  padding: 20px;
  margin: auto;
  font-size: 18px;
  color: ${colors.FONT};
  border: 1px solid ${colors.BORDER};

  :hover {
    font-weight: 600;
    color: ${colors.FOCUS};
    border: 2px solid ${colors.FOCUS};
  }
`
