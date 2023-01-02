import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const routineRunContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
  overflow: scroll;
`
export const routineRunBox = styled.div`
  width: 100%;
  padding: 20px;
`

export const routineRunTitleBox = styled.div`
  width: 100%;
  margin: auto;

  div {
    width: 100%;
    margin: auto;
    font-weight: 600;
    text-align: center;
  }
  .category {
    font-size: 26px;
    color: ${colors.FOCUS};
  }
  .target {
    margin-top: 10px;
    font-size: 20px;
    color: ${colors.FONT};
  }
`

export const routineRunWorkout = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`

export const routineRunRecord = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 600;
  div {
    width: 50px;
    text-align: center;
  }
`
