import React, { FC } from "react";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import s from "./styles.module.css";
import { Button } from "common/components/Button/Button";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArgAddNewPackType } from "features/packsList/packsList.api";
import { packsListThunks } from "features/packsList/packsList.slice";
import * as yup from "yup";

type Props = {
  setOpenModal: (openModal: boolean) => void
  openModal: boolean
}
type NewCardFormType = {
  questions: string
  answer: string
}
const schema = yup.object().shape({
  questions: yup.string().required("Questions is required"),
  answer: yup.string().required("Answer is required"),

});

export const AddNewCards:FC<Props> = ({setOpenModal,openModal}) => {


  const handleClose = () => setOpenModal(false);


  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewCardFormType>({
    defaultValues: {
      questions: "",
      answer: "",

    },
    resolver: yupResolver(schema)
  });


  const onSubmitHandler = (data: NewCardFormType) => {
    console.log(data);
    // const dataUrlParam: ArgAddNewPackType = {
    //
    //   cardsPack: {
    //     name: data.name,
    //     private: data.private
    //   }
    //
    // };
    //
    // dispatch(packsListThunks.addNewPack(dataUrlParam))
    //   .then(() => {
    //
    //     dispatch(packsListThunks.getPacksList({ user_id: userId }));
    //   });
    reset();
    setOpenModal(false);
  };

  return (
    <ModalWindow open={openModal} setOpen={setOpenModal} titleNameModalWindow={"Add new card"}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>

          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-newCard">Questions</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
                   {...register("questions")}
                   placeholder="Questions"
                   required
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.questions?.message}</p>
          </FormControl>


          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-newCard">Answer</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
                   {...register("answer")}
                   placeholder="Answer"
                   required
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.answer?.message}</p>
          </FormControl>



        </FormGroup>
        <div className={s.buttons}>
          <Button title={"Cancel"} onClickHandler={handleClose} colorButton={"#FCFCFC"} />

          <Button type={"submit"} title={"Save"} />
        </div>
      </form>



    </ModalWindow>
  );
};

