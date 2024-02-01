import WriteMessage from '@/components/template/WriteMessage/writeMessage'
import MainTitle from '@/components/molecule/title/MainTitle'

function Writemessage() {
  return (
    <>
      <MainTitle title="코인 선택 후, 덕담을 작성해봐요" desc="" />
      <WriteMessage
        imageHandler={function (blob: File, callback: FunctionConstructor): void {
          throw new Error('Function not implemented.')
        }}
      />
    </>
  )
}

export default Writemessage
