/* eslint-disable react/jsx-indent */
import * as S from './styles'
import { ReactComponent as Arrow } from '../../assets/imgs/arrow_click.svg'
import { IYoutubeProps } from '../../types/allProps.d'

const YoutubeCard = ({ categoryIndex, youtubeData }: IYoutubeProps) => {
  const index = categoryIndex
  const youtubeState = youtubeData && youtubeData.youtubeData[index]?.items

  return (
    <S.cardContainer>
      {youtubeData.loading === true && <S.Spinner />}
      {youtubeData.loading === false && youtubeData.error === 'fulfilled'
        ? youtubeState.map((data) => (
            <S.cardBox key={data.etag}>
              <S.videoView>
                <img src={data.snippet.thumbnails?.medium.url} alt={data.snippet.channelTitle} />
              </S.videoView>
              <S.videoTitle>{data.snippet.channelTitle}</S.videoTitle>
              <S.videoLink href={`https://www.youtube.com/watch?v=${data.id.videoId}`} target='_blank' rel='noreferrer'>
                유튜브 보러가기
                <Arrow />
              </S.videoLink>
            </S.cardBox>
          ))
        : youtubeData.loading === false && <S.errorBox>현재 Youtube Api를 호출 할 수 없습니다.</S.errorBox>}
    </S.cardContainer>
  )
}

export default YoutubeCard
