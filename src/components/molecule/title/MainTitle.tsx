import MainText from '@/components/atom/text/MainText';
import MainSubText from '@/components/atom/text/MainSubText';
import * as Styled from "./maintitle.styled"


interface MainTitleProps {
    title: string;
    desc: string;
}

function MainTitle({title,desc}:MainTitleProps) {
  return (
      <Styled.SLayout>
        <MainText title={title} />
        <MainSubText desc={desc} />
      </Styled.SLayout>
  )
}

export default MainTitle