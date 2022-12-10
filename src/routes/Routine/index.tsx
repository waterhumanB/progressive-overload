import { useAppSelector } from '../../hooks/useAppSelector'
import { getUserInfo } from '../../states/user'
import { ReactComponent as Female } from '../../assets/imgs/female.svg'
import { ReactComponent as Male } from '../../assets/imgs/male.svg'

import * as S from './styles'

const Routine = () => {
  const userInfo = useAppSelector(getUserInfo)
  return (
    <S.routineContainer>
      <S.userBox>
        <span>{userInfo.user.nickName}</span>
        {userInfo.user.gender === '남자' ? <Male /> : <Female />}
      </S.userBox>
      <S.youtubeContainer>
        <S.youtubeBox>추천 운동 루틴</S.youtubeBox>
        <S.youtubeBox>
          부위별 추천 <br /> 운동 루틴
        </S.youtubeBox>
      </S.youtubeContainer>
    </S.routineContainer>
  )
}

export default Routine
