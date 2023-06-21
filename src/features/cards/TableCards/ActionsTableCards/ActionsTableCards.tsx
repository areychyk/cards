import React, { FC } from "react";
import s from "./styles.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DeleteCard } from "features/cards/TableCards/ActionsTableCards/DeleteCard/DeleteCard";
import { EditCard } from "features/cards/EditCard/EditCard";

type Props = {

  idCard:string
  cardQuestion:string
  cardAnswer:string
}


export const ActionsTableCards: FC<Props> = ({  idCard,cardQuestion,cardAnswer}) => {

  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);



  const onClickEditPack=()=>setOpenEditModal(true)



  const onClickDeletePack = () => setOpenModal(true)





  return (
    <div className={s.actionsCompWrapper}>

        <BorderColorOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" , paddingRight:"10px" }} onClick={onClickEditPack}/>

      {
        openEditModal && <EditCard
          setOpenModal={setOpenEditModal}
          openModal={openEditModal}
          cardQuestion={cardQuestion}
          cardAnswer={cardAnswer}
          idCard={idCard}/>
      }

        <DeleteOutlineOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickDeletePack} />
      {openModal && <DeleteCard
        setOpenModal={setOpenModal}
        openModal={openModal}
        cardQuestion={cardQuestion}
        idCard={idCard}
      />}


    </div>
  );
};

