import { MouseEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowBtn } from '../../../assets/imgs/arrow_btn.svg'
import { ReactComponent as Arrow } from '../../../assets/imgs/arrow.svg'
import { YOUTUBE_SEARCH_DATA } from '../../../constants/searchData'
import * as S from './styles'
import YoutubeCard from '../../../components/YoutubeCard'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getYoutubeRecommendData, getYoutubeRecommendDataList } from '../../../states/youtubeRecommend'

const CATEGORY_SLICE = 4

const Youtube = () => {
  const dispatch = useAppDispatch()
  const Navigate = useNavigate()
  const youtubeSelector = useAppSelector(getYoutubeRecommendDataList)
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const searchDataList = YOUTUBE_SEARCH_DATA.slice(currentPage, currentPage + CATEGORY_SLICE)

  const returnPageBtn = () => {
    Navigate(-1)
  }
  const categoryOrderHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    if (name === 'left' && currentPage > 0) {
      setCurrentPage((prev) => prev - CATEGORY_SLICE)
    }
    if (name === 'right' && currentPage < 8) {
      setCurrentPage((prev) => prev + CATEGORY_SLICE)
    }
  }

  useEffect(() => {
    if (youtubeSelector.youtubeData.length !== 11) {
      dispatch(getYoutubeRecommendData(YOUTUBE_SEARCH_DATA))
    }
  }, [])

  const categoryIndexhandler = (e: MouseEvent<HTMLButtonElement>) => {
    setCategoryIndex(YOUTUBE_SEARCH_DATA.indexOf(e.currentTarget.name))
  }

  return (
    <section>
      <S.titleBox>
        <button type='button' onClick={returnPageBtn}>
          <Arrow />
        </button>
        <S.youtubeTitle>유튜브 추천 운동 루틴</S.youtubeTitle>
      </S.titleBox>
      <S.categoryContainer>
        <S.pageBtn page={currentPage} direction='left' name='left' type='button' onClick={categoryOrderHandler}>
          <ArrowBtn />
        </S.pageBtn>
        <S.categoryBox>
          {searchDataList.map((data) => (
            <S.categoryItem
              focus={YOUTUBE_SEARCH_DATA[categoryIndex] === data}
              onClick={categoryIndexhandler}
              name={data}
              key={data}
            >
              {data}
            </S.categoryItem>
          ))}
        </S.categoryBox>
        <S.pageBtn page={currentPage} direction='right' name='right' type='button' onClick={categoryOrderHandler}>
          <ArrowBtn />
        </S.pageBtn>
      </S.categoryContainer>
      <YoutubeCard spinnerOn youtubeData={youtubeSelector} categoryIndex={categoryIndex} />
    </section>
  )
}

export default Youtube
