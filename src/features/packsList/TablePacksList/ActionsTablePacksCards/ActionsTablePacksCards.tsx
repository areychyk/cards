import React, { FC } from "react";
import s from "./styles.module.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";
import { selectProfile } from "common/selectors/auth.selectors";
import { DeletePack } from "features/packsList/TablePacksList/ActionsTablePacksCards/DeletePack/DeletePack";

type Props = {
  idUserCards: string
  idCard: string
  packName: string
}


export const ActionsTablePacksCards: FC<Props> = ({ idUserCards, idCard, packName }) => {

  const [openModal, setOpenModal] = React.useState(false);


  const profile = useSelector(selectProfile);


  const onClickEditPack = () => {

  };


  const onClickDeletePack = () => setOpenModal(true);

  return (
    <div className={s.actionsCompWrapper}>


      <SchoolOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} aria-disabled={true} />

      {profile && profile._id === idUserCards && <>
        <BorderColorOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickEditPack} />
        <DeleteOutlineOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickDeletePack} />

        {openModal && <DeletePack
          setOpenModal={setOpenModal}
          openModal={openModal}
          packName={packName}
          idUserCards={idUserCards}
          idCard={idCard}
        />}
      </>
      }


    </div>
  );
};

