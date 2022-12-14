/* eslint-disable react/jsx-indent */
import * as S from './styles'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getYoutubeDataList } from '../../states/youtube'
import { ReactComponent as Arrrow } from '../../assets/imgs/arrow_click.svg'
import { IYoutubeIndexProps } from '../../types/allProps.d'

const YoutubeCard = ({ categoryIndex }: IYoutubeIndexProps) => {
  const index = categoryIndex
  const selctor = useAppSelector(getYoutubeDataList)
  const youtubeState = selctor && selctor.youtubeData[index]?.items
  return (
    <S.cardContainer>
      {selctor.loading === true && <S.Spinner />}
      {selctor.loading === false && selctor.error === 'fuilfilled'
        ? youtubeState.map((data) => (
            <S.cardBox key={data.etag}>
              <S.videoView>
                <img src={data.snippet.thumbnails?.medium.url} alt={data.snippet.channelTitle} />
              </S.videoView>
              <S.vidoeTitle>{data.snippet.channelTitle}</S.vidoeTitle>
              <S.vidoeLink href={`https://www.youtube.com/watch?v=${data.id.videoId}`} target='_blank' rel='noreferrer'>
                유튜브 보러가기
                <Arrrow />
              </S.vidoeLink>
            </S.cardBox>
          ))
        : selctor.loading === false && <S.errorBox>현재 Youtube Api를 호출 할 수 없습니다.</S.errorBox>}
    </S.cardContainer>
  )
}

export default YoutubeCard
