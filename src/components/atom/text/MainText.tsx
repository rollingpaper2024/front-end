import * as Styled from "./maintext.styled";



interface MainTextProps {
  title: string;
}

function MainText({ title }: MainTextProps) {
  return (
    <Styled.STitleH1>{title}</Styled.STitleH1>
  );
}

export default MainText;