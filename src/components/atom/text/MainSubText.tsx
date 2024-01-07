import * as Styled from "./mainsubtext.styled"

interface MainSubTextProps {
  desc: string;
}

function MainSubText({desc}:MainSubTextProps) {
  return (
      <Styled.SDesc>{desc}</Styled.SDesc>
  )
}

export default MainSubText