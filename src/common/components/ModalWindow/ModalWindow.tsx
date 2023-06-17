// import React, { FC } from "react";
// import { CompWrapperForContent } from "common/components/CompWrapperForContent";
// import s from "./styles.module.css";
//
//
// type Props = {
//   // onClick: (showModelAddNewPack: boolean) => void
//   children: React.ReactNode
//
// }
//
//
//
//
// export const ModalWindow: FC<Props> = ({ children }) => {
//
//
//
//
//
//   const onclickCloseWindow = () => {
//     // setShowModelAddNewPack(false);
//   };
//
//
//
//   return (
//     <div className={s.wrapperAddNewPackComp}>
//       <button onClick={onclickCloseWindow}>X</button>
//       <CompWrapperForContent title={"Add new pack"} showCloseModel={true} onClick={onclickCloseWindow}>
//
//         {children}
//       </CompWrapperForContent>
//     </div>
//   );
// };
//


import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { Button } from "common/components/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import s from "./styles.module.css";


type Props = {
  // onClick: (showModelAddNewPack: boolean) => void
  children: React.ReactNode
  titleNameModalWindow?: string
  childrenButton:React.ReactNode

}

export const ModalWindow: FC<Props> = ({ children, titleNameModalWindow,childrenButton }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button title={titleNameModalWindow ?? ""} onClickHandler={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={s.wrapperModalWindow}>
          <div className={s.headerModalWindow}>
            <p className={s.nameModalWindow}>{titleNameModalWindow}</p>
            <CloseIcon onClick={handleClose} style={{cursor:"pointer"}} />

          </div>

          <div className={s.contentModalWindow}>
            {children}
          </div>
          <div className={s.buttons}>
            <Button title={"Cancel"} onClickHandler={handleClose} colorButton={ '#FCFCFC'} />
            {childrenButton}
          </div>
        </Box>
      </Modal>
    </div>
  );
};
