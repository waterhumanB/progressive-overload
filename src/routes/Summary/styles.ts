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
  height: 178px;
  padding: 0 10px;
  border-right: 1px solid ${colors.BLUE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`
