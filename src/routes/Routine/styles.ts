import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const routineContainer = styled.section`
  width: 100%;
`
export const userBox = styled.div`
  justify-content: center;
  width: 300px;
  margin: 30px auto;
  display: flex;
  span {
    font-weight: bold;
    font-size: 30px;
    margin-right: 10px;
  }
`

export const youtubeContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
`

export const youtubeBox = styled.button`
  color: ${colors.SKY};
  font-size: 17px;
  line-height: 30px;
  font-weight: 800;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 140px;
  height: 80px;
  background: ${colors.WHITE};
  border: 2px solid ${colors.SKY};
  border-radius: 20px;
  :hover {
    color: ${colors.BLUE};
    border: 2px solid ${colors.BLUE};
  }
`
