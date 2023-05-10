import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const cardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: scroll;
`

export const cardBox = styled.div`
  margin: 16px 7px 7px 7px;
  width: 180px;
  height: 200px;
  border: 2px solid ${colors.BACK};
  border-radius: 10px;
`

export const videoView = styled.div`
  width: 160px;
  height: 100px;
  margin: 7px auto;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`
export const videoTitle = styled.div`
  width: 100%;
  padding: 5px 5px 0 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${colors.FOCUS};
  word-break: keep-all;
`
export const videoLink = styled.a`
  font-size: 15px;
  color: ${colors.FONT};
  margin: 10px auto auto auto;
  padding: 5px 5px 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${colors.FOCUS};
    font-weight: 600;
  }
  svg {
    margin-left: 5px;
  }
`
export const errorBox = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  color: ${colors.FOCUS};
  font-weight: 600;
  font-size: 20px;
`

export const spinnerBox = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const spinner = styled.div`
  display: flex;
  width: 175px;
  height: 175px;
  border: 6px solid ${colors.FOCUS};
  border-top: 6px solid ${colors.BACK};
  border-radius: 50%;
  margin: auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  animation: rotation 1s linear infinite;
`
