import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const customPageConatiner = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const customTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${colors.FONT};
    width: 50px;
    height: 50px;
    transform: scaleX(-1);
    :hover {
      fill: ${colors.FOCUS};
    }
  }

  div {
    width: 100%;
    font-size: 30px;
    color: ${colors.FONT};
    font-weight: 600;
    text-align: center;
  }
`

export const cutomDataBox = styled.div`
  width: 100%;
  height: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const customInput = styled.div`
  width: 100%;
  height: 40px;
  background: ${colors.WHITE};
  margin-bottom: 80px;
  border: 2px solid ${colors.BACK};
  input {
    font-weight: 600;
    width: 100%;
    height: 100%;
    text-align: center;
    ::placeholder {
      color: ${colors.FOCUS};
    }
  }
`
export const customSelector = styled.button`
  width: 100%;
  height: 40px;
  background: ${colors.WHITE};
  border: 2px solid ${colors.BACK};
  color: ${colors.FOCUS};
  font-size: 16px;
  margin-bottom: 80px;
  align-items: center;
  display: flex;
  div {
    font-weight: 600;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`
