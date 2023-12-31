import MainBtn from '@/components/atom/buttons/MainBtn'
import PocketActive from "@/img/pocket_active.svg"

function main() {
  return (
    <>
      <div><PocketActive/></div>
      <MainBtn title="덕담 보내기" isDisabled={false} />
    </>
  )
}

export default main
