import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import { ArgAddNewPackType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { useSelector } from "react-redux";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import { Button } from "common/components/Button/Button";
import s from "./styles.module.css";


type Props = {
  setOpenModal: (openModal: boolean) => void
  openModal: boolean
}

type NewPackFormType = {
  name: string
  private: boolean
}
const schema = yup.object().shape({
  name: yup.string().required("Name new pack is required")

});


export const AddNewPack: FC<Props> = ({ setOpenModal, openModal }) => {


  const userId = useSelector(selectProfileId);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewPackFormType>({
    defaultValues: {
      name: "",
      private: false
    },
    resolver: yupResolver(schema)
  });


  const onSubmitHandler = (data: NewPackFormType) => {
    console.log(data);
    const dataUrlParam: ArgAddNewPackType = {

      cardsPack: {
        name: data.name,
        private: data.private
      }

    };

    dispatch(packsListThunks.addNewPack(dataUrlParam))
      .then(() => {

        dispatch(packsListThunks.getPacksList({ user_id: userId }));
      });
    reset();
    setOpenModal(false);
  };


  const handleClose = () => {

    setOpenModal(false);
  };

  return (

    <ModalWindow titleNameModalWindow={"Add new pack"} open={openModal} setOpen={setOpenModal}>


      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>

          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-newPack">Name pack</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
                   {...register("name")}
                   placeholder="Name pack"
                   required
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.name?.message}</p>
          </FormControl>


          <FormControlLabel
            sx={{ width: "100%", textAlign: "left" }}
            label={"Private"}
            control={<Checkbox {...register("private")} />}
          />

        </FormGroup>
        <div className={s.buttons}>
          <Button title={"Cancel"} onClickHandler={handleClose} colorButton={"#FCFCFC"} />

          <Button type={"submit"} title={"Save"} />
        </div>
      </form>

    </ModalWindow>

  );
};

