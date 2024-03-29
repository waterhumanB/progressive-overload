import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const exerciseContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const exerciseBox = styled.div<{ border: boolean }>`
  border: 1px solid ${colors.BACK};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  background: ${colors.BACK};
  border: ${(props) => (props.border ? `1px solid ${colors.FOCUS}` : '')};
`

export const editBtn = styled.button`
  svg {
    margin-right: 3px;
    width: 40px;
    height: 40px;
  }
  path {
    fill: ${colors.FOCUS};
  }
`

export const favoriteBtn = styled.button`
  svg {
    margin-right: 3px;
    width: 40px;
    height: 40px;
    transform: scaleX(-1);
    path {
      fill: ${colors.FOCUS};
    }
  }
`

export const mainTarget = styled.div`
  color: ${colors.FOCUS};
  font-weight: 600;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background: ${colors.WHITE};
  margin-left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: ${colors.FOCUS};
    }
  }
`

export const exerciseInfo = styled.button`
  width: 70%;
  margin: auto;
  text-align: center;
`
export const exerciseTitle = styled.div`
  color: ${colors.FOCUS};
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  div:nth-child(1) {
    margin-right: 5px;
  }
`

export const exerciseTarget = styled.div`
  color: ${colors.FONT};
  font-weight: 600;
  display: flex;
  justify-content: center;

  div:nth-child(2) {
    margin-left: 5px;
  }
`
export const errorFetchedData = styled.div`
  max-width: 430px;
  width: 100%;
  margin: auto;
  position: absolute;
  top: 55%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.FOCUS};
`
export const refDiv = styled.div`
  width: 1px;
  height: 1px;
  margin-bottom: 50px;
`
