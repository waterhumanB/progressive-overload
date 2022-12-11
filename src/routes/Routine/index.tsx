import { useAppSelector } from '../../hooks/useAppSelector'
import { getUserInfo } from '../../states/user'
import { ReactComponent as Female } from '../../assets/imgs/female.svg'
import { ReactComponent as Male } from '../../assets/imgs/male.svg'
import { ReactComponent as Youtube } from '../../assets/imgs/youtube.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Routine = () => {
  const userInfo = useAppSelector(getUserInfo)

  return (
    <S.routineContainer>
      <S.userContainer>
        <S.userBox className='nickName'>
          <span>{userInfo.user.nickName}</span>
          {userInfo.user.gender === '남자' ? <Male /> : <Female />}
        </S.userBox>
        <S.userBox className='info'>
          <div>나이 : {userInfo.user.age}</div>
          <div>키 : {userInfo.user.tall}cm</div>
          <div>몸무게 : {userInfo.user.weight}kg</div>
        </S.userBox>
      </S.userContainer>
      <S.subMenuContainer>
        <div>나의 운동 루틴</div>
        <Link to='/routine/youtube' className='youtube'>
          <Youtube className='logo' />
          Youtube 추천 운동 루틴
        </Link>
      </S.subMenuContainer>
    </S.routineContainer>
  )
}

export default Routine
