import BackGround from "@/components/atom/background/BackGround"
import ModalCard from "@/components/atom/card/ModalCard"

interface ModalType {
  isModalOpen?: boolean;
  setIsModalOpen?: (value: boolean | ((prevVal: boolean) => boolean)) => void;
  PostPocket?: () => Promise<void>;
}

function MainModal({isModalOpen,setIsModalOpen, PostPocket = () => Promise.resolve()}:ModalType) {
  const handlePostPocket = () => {
    return PostPocket ? PostPocket() : Promise.resolve();
  };
  if (!isModalOpen) return null;


  return (
    <BackGround><ModalCard setIsModalOpen={setIsModalOpen} PostPocket={handlePostPocket}/></BackGround>
  )
}

export default MainModal