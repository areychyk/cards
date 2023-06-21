import React, { FC } from "react";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import s from "./styles.module.css";
import { Button } from "common/components/Button/Button";
import { useAppDispatch } from "common/hooks";
import { cardsThunks } from "features/cards/cards.slice";
import { useParams } from "react-router-dom";

type Props = {
  setOpenModal: (openModal: boolean) => void
  openModal: boolean
  cardQuestion: string

  idCard: string
}

export const DeleteCard: FC<Props> = ({ openModal, setOpenModal, cardQuestion, idCard }) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    setOpenModal(false);
  };
  const { packId } = useParams();


  const onClickDeletePack = () => {

    if(packId){
      dispatch(cardsThunks.deleteCard( idCard ))
        .then(()=>{
          dispatch(cardsThunks.getCards({cardsPack_id: packId}));
          setOpenModal(false)
        })
    }

  };

  return (
    <ModalWindow titleNameModalWindow={"Delete Pack"} open={openModal} setOpen={setOpenModal}>
      <p className={s.text}>Do you really want to remove <span className={s.packName}>{cardQuestion}</span> ?<br />
        All cards will be deleted.</p>

      <div className={s.buttons}>
        <Button title={"Cancel"} onClickHandler={handleClose} colorButton={"#FCFCFC"} />

        <Button type={"submit"} title={"Delete"} onClickHandler={onClickDeletePack} colorButton={"#FF3636"} />
      </div>
    </ModalWindow>
  );
};

