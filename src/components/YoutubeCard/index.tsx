import * as S from './styles'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getYoutubeDataList } from '../../states/youtube'
import { ReactComponent as Arrrow } from '../../assets/imgs/arrow_click.svg'

interface Props {
  categoryIndex: number
}

const YoutubeCard = ({ categoryIndex }: Props) => {
  const index = categoryIndex
  const selctor = useAppSelector(getYoutubeDataList)
  const youtubeState = selctor.youtubeData[index].data.items
  return (
    <S.cardContainer>
      {youtubeState.map((data) => (
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
      ))}
    </S.cardContainer>
  )
}

export default YoutubeCard
