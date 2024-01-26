import WriteMessage from '@/components/template/WriteMessage/writeMessage'

function Writemessage() {
  return (
    <>
      <WriteMessage
        imageHandler={function (blob: File, callback: FunctionConstructor): void {
          throw new Error('Function not implemented.')
        }}
      />
    </>
  )
}

export default Writemessage
