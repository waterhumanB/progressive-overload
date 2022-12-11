import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const cardContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const cardBox = styled.div`
  margin: 10px;
  width: 220px;
  height: 200px;
  border: 1px solid ${colors.GRAY};
  border-radius: 8px;
`

export const videoView = styled.div`
  width: 200px;
  height: 100px;
  margin: 7px auto;
  border: 1px solid ${colors.GRAY};
  border-radius: 12px;
`
export const vidoeTitle = styled.div`
  width: 210px;
  margin: auto auto 5px auto;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.BLACK};
`
export const vidoeDesc = styled.div`
  font-size: 14px;
  color: ${colors.FONT};
  width: 210px;
  margin: auto;
`
