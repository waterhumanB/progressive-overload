import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const dountChartContainer = styled.div`
  width: 100%;
  display: flex;
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
