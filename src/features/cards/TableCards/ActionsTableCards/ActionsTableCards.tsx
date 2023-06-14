import React, { FC } from "react";
import s from "./styles.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useAppDispatch } from "common/hooks";
import { useParams } from "react-router-dom";
import { cardsThunks } from "features/cards/cards.slice";

type Props = {

  cardId:string
}


export const ActionsTableCards: FC<Props> = ({  cardId}) => {
  const dispatch = useAppDispatch();
  const { packId } = useParams();




  const onClickEditPack=()=>{

  }


  const onClickDeletePack = () => {
    if(packId){
      dispatch(cardsThunks.deleteCard( cardId ))
        .then(()=>{
          dispatch(cardsThunks.getCards({cardsPack_id: packId}));

        })
    }


  };

  return (
    <div className={s.actionsCompWrapper}>

        <BorderColorOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" , paddingRight:"10px" }} onClick={onClickEditPack}/>
        <DeleteOutlineOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickDeletePack} />


    </div>
  );
};

