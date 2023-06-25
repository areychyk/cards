import React, { ChangeEvent, FC, useState } from "react";
import { useAppDispatch } from "common/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import s from "./styles.module.css";
import { Button } from "common/components/Button/Button";
import * as yup from "yup";
import { ArgEditPackType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useSelector } from "react-redux";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";


type Props = {
  setOpenModal: (openModal: boolean) => void
  openModal: boolean
  packName: string
  idCard: string

}
type EditFormType = {
  name: string
  private: boolean

}
const schema = yup.object().shape({
  name: yup.string().required("Name is required")


});


export const EditPack: FC<Props> = ({ setOpenModal, openModal, idCard, packName }) => {

  const [namePack, setNamePack] = useState<string>(packName);
  const profileId = useSelector(selectProfileId);


  const dispatch = useAppDispatch();


  const { register, handleSubmit, formState: { errors }, reset } = useForm<EditFormType>({
    defaultValues: {
      name: "",
      private: false


    },
    resolver: yupResolver(schema)
  });


  const onSubmitHandler = (data: EditFormType) => {

    const dataUrlParam: ArgEditPackType = {
      cardsPack: {
        _id: idCard,
        name: data.name,
        private: data.private
      }

    };

    dispatch(packsListThunks.editPack(dataUrlParam))
      .then(() => {

        dispatch(packsListThunks.getPacksList({ user_id: profileId }));
      });
    reset();
    setOpenModal(false);
  };


  const onChangeEditNamePack = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setNamePack(event.currentTarget.value);

  };

  const handleClose = () => setOpenModal(false);

  return (
    <ModalWindow open={openModal} setOpen={setOpenModal} titleNameModalWindow={"Edit pack"}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>

          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-editPack">Name pack</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
                   {...register("name")}
                   placeholder="Name pack"
                   value={namePack}
                   onChange={onChangeEditNamePack}
                   required
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.name?.message}</p>
          </FormControl>

          <FormControlLabel
            sx={{ width: "100%", textAlign: "left" }}
            label={"Private pack"}
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

