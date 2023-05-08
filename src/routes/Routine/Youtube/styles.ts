import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const titleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;

  svg {
    fill: ${colors.FONT};
    width: 50px;
    height: 50px;
    bottom: 11px;
    transform: scaleX(-1);
    position: absolute;
    :hover {
      fill: ${colors.FOCUS};
    }
  }
`

export const youtubeTitle = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 0;
  font-size: 32px;
  font-weight: 600;
  color: ${colors.FONT};
  text-align: center;
`

export const categoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  svg {
    width: 26px;
    height: 30px;
  }
`

export const categoryAnimation = styled.div`
  width: 100%;
  display: flex;
`
export const categoryBox = styled.div`
  max-width: 378px;
  display: flex;
  overflow: hidden;
`

export const pageBtn = styled.button<{ direction: string; page: number }>`
  transform: ${(props) => (props.direction === 'left' ? 'scaleX(-1);' : '')};
  fill: ${colors.FONT};
  opacity: ${(props) =>
    (props.direction === 'left' && props.page === 0 && '0') ||
    (props.direction === 'right' && props.page === 8 && '0')};
  cursor: ${(props) =>
    (props.direction === 'left' && props.page === 0 && 'default') ||
    (props.direction === 'right' && props.page === 8 && 'default')};
  :hover {
    fill: ${colors.FOCUS};
  }
`

export const categoryItem = styled.button<{ focus: boolean }>`
  min-width: 80px;
  margin: auto 5px;
  padding: 7px 3px;
  background: ${(props) => (props.focus ? colors.FONT : colors.WHITE)};

  box-sizing: border-box;
  border: ${(props) => (props.focus ? 0 : `2px solid${colors.BACK}`)};
  font-size: 16px;
  color: ${(props) => (props.focus ? colors.WHITE : colors.FONT)};
  border-radius: 10px;
  :hover {
    color: ${colors.WHITE};
    background: ${colors.FONT};
    border: 0;
  }
`
