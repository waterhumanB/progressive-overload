import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const cardContainer = styled.div`
  width: 100%;
  height: 670px;
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
export const vidoeTitle = styled.div`
  width: 100%;
  padding: 5px 5px 0 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${colors.FOCUS};
  word-break: keep-all;
`
export const vidoeLink = styled.a`
  font-size: 15px;
  color: ${colors.FONT};
  margin: 10px auto auto auto;
  padding: 5px 5px 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: ${colors.FOCUS};
  }
`
