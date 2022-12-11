import styled from 'styled-components'
import colors from '../../styles/constants/colors'

export const cardContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  border: 2px solid ${colors.BACK};
  border-radius: 10px;
`
export const vidoeTitle = styled.div`
  width: 100%;
  padding: 5px 5px 0 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.FOCUS};
`
export const vidoeDesc = styled.div`
  font-size: 14px;
  color: ${colors.FONT};
  width: 210px;
  margin: auto;
  padding: 5px 5px 0 5px;
`
