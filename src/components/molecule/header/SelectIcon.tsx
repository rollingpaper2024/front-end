import * as Styled from './selecticon.styled'
import HeaderIcon from '@/components/atom/icon/header/HeaderIcon'
import ActiveHeaderIcon from '@/img/HeaderIcon'

function SelectIcon({isUser}:{isUser?:boolean}) {
  return (
    <Styled.SLayout>
      <HeaderIcon icon={<ActiveHeaderIcon />} />
      {/* 공유하기 아이콘 자리  */}
      {isUser&&  <HeaderIcon icon={<ActiveHeaderIcon />} />}
      {/* 알람 기능 */}
    </Styled.SLayout>
  )
}

export default SelectIcon
