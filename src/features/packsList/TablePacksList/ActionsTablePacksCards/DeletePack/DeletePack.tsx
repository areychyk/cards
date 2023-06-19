import React, { FC } from "react";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import s from "./styles.module.css";
import { Button } from "common/components/Button/Button";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";

type Props = {
  setOpenModal: (openModal: boolean) => void
  openModal: boolean
  packName: string
  idUserCards: string
  idCard: string
}

export const DeletePack: FC<Props> = ({ openModal, setOpenModal, packName, idUserCards, idCard }) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    setOpenModal(false);
  };


  const onClickDeletePack = () => {

    dispatch(packsListThunks.deletePack({ id: idCard }))
      .then(() => {
        dispatch(packsListThunks.getPacksList({ user_id: idUserCards }));
        setOpenModal(false);

      });

  };

  return (
    <ModalWindow titleNameModalWindow={"Delete Pack"} open={openModal} setOpen={setOpenModal}>
      <p className={s.text}>Do you really want to remove <span className={s.packName}>{packName}</span> ?<br />
        All cards will be deleted.</p>

      <div className={s.buttons}>
        <Button title={"Cancel"} onClickHandler={handleClose} colorButton={"#FCFCFC"} />

        <Button type={"submit"} title={"Delete"} onClickHandler={onClickDeletePack} colorButton={"#FF3636"} />
      </div>
    </ModalWindow>
  );
};

