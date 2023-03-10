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
  border-right: 1px solid ${colors.BLUE};
  display: flex;
  flex-direction: column;
  text-align: center;

  div {
    width: 40px;
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
