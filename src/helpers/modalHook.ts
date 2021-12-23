import { Ref, ref } from "vue";

interface IHookModal {
  isOpenModal: Ref<boolean>;
  openModalHandler: () => void;
  closeModalHandler: () => void;
}

const hookModal = (): IHookModal => {
  const isOpenModal = ref<boolean>(false);

  const openModalHandler = () => {
    isOpenModal.value = true;
  };

  const closeModalHandler = () => {
    isOpenModal.value = false;
  };

  return {
    isOpenModal,
    openModalHandler,
    closeModalHandler,
  };
};

export default hookModal;
