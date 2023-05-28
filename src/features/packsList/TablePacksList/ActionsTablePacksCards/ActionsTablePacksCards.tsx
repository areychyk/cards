import React, { FC } from "react";
import s from "./styles.module.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";
import { selectProfile } from "app/App.selector";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";

type Props = {
  idUserCards: string
  idCard:string
}


export const ActionsTablePacksCards: FC<Props> = ({ idUserCards,idCard }) => {
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);


  const onClickDeletePack = () => {
    dispatch(packsListThunks.deletePack({id: idCard } )).then(()=>{
      dispatch(packsListThunks.getPacksList({user_id:idUserCards}));

    })

  };


  return (
    <div className={s.actionsCompWrapper}>
      <SchoolOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} />

      {profile && profile._id === idUserCards && <>
        <BorderColorOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} />
        <DeleteOutlineOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickDeletePack} />
      </>
      }


    </div>
  );
};

