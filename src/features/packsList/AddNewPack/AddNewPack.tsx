import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import { ArgAddNewPackType } from "features/packsList/packsList.api";
import { ButtonForAuth } from "common/components/ButtonForAuth/ButtonForAuth";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { useSelector } from "react-redux";
import { selectProfileId } from "common/selectors/auth.selectors/auth.selector";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import { Button } from "common/components/Button/Button";


type Props = {}

type NewPackFormType = {
  name: string
  private: boolean
}
const schema = yup.object().shape({
  name: yup.string().required("Nane new pack is required")

});


export const AddNewPack: FC<Props> = ({}) => {

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

  };

  return (

    <ModalWindow titleNameModalWindow={"Add new pack"}
                 childrenButton={<Button type={"submit"} title={"Save"} />}>


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
          <button type={"submit"}>+</button>
        </FormGroup>
      </form>

    </ModalWindow>

  );
};

