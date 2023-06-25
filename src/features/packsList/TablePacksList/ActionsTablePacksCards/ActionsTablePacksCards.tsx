import React, { FC } from "react";
import s from "./styles.module.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";
import { selectProfile } from "common/selectors/auth.selectors";
import { DeletePack } from "features/packsList/TablePacksList/ActionsTablePacksCards/DeletePack/DeletePack";
import { EditPack } from "features/packsList/TablePacksList/ActionsTablePacksCards/EditPack/EditPack";
import { useNavigate } from "react-router-dom";

type Props = {
  idUserCards: string
  idCard: string
  packName: string
}


export const ActionsTablePacksCards: FC<Props> = ({ idUserCards, idCard, packName }) => {

  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const navigate = useNavigate();

  const profile = useSelector(selectProfile);


  const onClickEditPack = () => setOpenEditModal(true);


  const onClickDeletePack = () => setOpenModal(true);

  const onClickLearnCards = () => {

    navigate(`/learnCards/${idCard}`);
  };

  return (
    <div className={s.actionsCompWrapper}>


      <SchoolOutlinedIcon onClick={onClickLearnCards} fontSize={"small"} style={{ cursor: "pointer" }}
                          aria-disabled={true} />

      {profile && profile._id === idUserCards && <>
        <BorderColorOutlinedIcon fontSize={"small"} style={{ cursor: "pointer" }} onClick={onClickEditPack} />

        {
          openEditModal && <EditPack
            idCard={idCard}
            openModal={openEditModal}
            setOpenModal={setOpenEditModal}
            packName={packName}
          />
        }
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

