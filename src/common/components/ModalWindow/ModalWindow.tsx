import * as React from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import s from "./styles.module.css";


type Props = {
  children: React.ReactNode
  titleNameModalWindow?: string
  open: boolean
  setOpen: (openModal: boolean) => void


}

export const ModalWindow: FC<Props> = ({ children, titleNameModalWindow, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.wrapperModalWindow}>
          <div className={s.headerModalWindow}>
            <p className={s.nameModalWindow}>{titleNameModalWindow}</p>
            <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />

          </div>

          <div className={s.contentModalWindow}>
            {children}
          </div>

        </Box>
      </Modal>
    </div>
  );
};
