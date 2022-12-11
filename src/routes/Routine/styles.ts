import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const routineContainer = styled.section`
  width: 100%;
`
export const userContainer = styled.div`
  display: flex;
  justify-content: space-around;
  .nickName {
    font-weight: bold;
    font-size: 30px;
  }
  .info {
    color: ${colors.FONT};
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
`

export const userBox = styled.div`
  justify-content: left;
  text-align: center;
  align-items: center;
  margin: 20px 0 25px 0;
  display: flex;
`
export const subMenuContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  .youtube {
    color: ${colors.BLACK};
    font-size: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 5px 7px;
    border: 1px solid ${colors.BLACK};
    border-radius: 12px;
    :hover {
      color: ${colors.BLUE};
      border: 1px solid ${colors.BLUE};
    }
  }

  .logo {
    margin-right: 10px;
  }
`
