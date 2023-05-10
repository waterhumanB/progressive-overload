import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routinefinishContainer = styled.section`
  width: 100%;
  padding: 20px;
`

export const routineTitleBox = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
`

export const routineTitle = styled.div`
  font-size: 26px;
  color: ${colors.FOCUS};
  margin-bottom: 10px;
`

export const routineData = styled.div`
  font-size: 18px;
  color: ${colors.FONT};
`

export const routineResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`

export const routineResultBox = styled.div`
  width: 100px;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  color: ${colors.FONT};
`

export const routineResultItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`

export const routineResultValue = styled.div`
  font-size: 25px;
  color: ${colors.FOCUS};
`

export const routineResultUnit = styled.div`
  font-size: 16px;
  color: ${colors.DEEP_SKY};
  margin-left: 5px;
`

export const homeRouterBtnBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  button {
    height: 30px;
    margin: auto;
    font-weight: 600;
    font-size: 20px;
    color: ${colors.GRAY};
    :hover {
      color: ${colors.FOCUS};
    }
  }
`
