import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const recentUnitMenuContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  border-top: 2px solid ${colors.BACK};
`
export const unitMenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const volumeMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const volume = styled.div<{ colorIdx: number }>`
  width: 15px;
  height: 15px;
  background: ${(props) =>
    (props.colorIdx === 0 && colors.SKY5) ||
    (props.colorIdx === 1 && colors.SKY4) ||
    (props.colorIdx === 2 && colors.SKY3) ||
    (props.colorIdx === 3 && colors.SKY2) ||
    (props.colorIdx === 4 && colors.SKY1)};
`
export const durationMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const duration = styled.div<{ colorIdx: number }>`
  width: 15px;
  height: 15px;
  background: ${(props) =>
    (props.colorIdx === 0 && colors.PURPLE5) ||
    (props.colorIdx === 1 && colors.PURPLE4) ||
    (props.colorIdx === 2 && colors.PURPLE3) ||
    (props.colorIdx === 3 && colors.PURPLE2) ||
    (props.colorIdx === 4 && colors.PURPLE1)};
`

export const value = styled.div`
  margin-left: 5px;
  font-weight: 600;
`
