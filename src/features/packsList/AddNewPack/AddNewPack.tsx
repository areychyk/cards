import React, { FC } from "react";
import { CompWrapperForContent } from "common/components/CompWrapperForContent";
import s from "./styles.module.css";
import { useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel } from "@mui/material";
import { ArgAddNewPackType, ArgPacksListType } from "features/packsList/packsList.api";
import { Button } from "common/components/Button/Button";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { toast } from "react-toastify";


type Props = {
  setShowModelAddNewPack: (showModelAddNewPack: boolean) => void
}

type NewPackFormType={
  name: string
  private: boolean
}
const schema = yup.object().shape({
  name: yup.string().required("Nane new pack is required")

});


export const AddNewPack: FC<Props> = ({ setShowModelAddNewPack }) => {

  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewPackFormType>({
    defaultValues: {
      name: "",
      private: false
    },
    resolver: yupResolver(schema)
  });

  const onclickCloseWindow = () => {
    setShowModelAddNewPack(false);
  };

  const onSubmitHandler = (data: NewPackFormType) => {

    const dataUrlParam: ArgAddNewPackType = {

      cardsPack:{
        name: data.name,
        private: data.private
      }

    };

    dispatch(packsListThunks.addNewPack(dataUrlParam)).then(() => {
      setShowModelAddNewPack(false);
      dispatch(packsListThunks.getPacksList({}));
    });
    console.log(data);
    reset();

  };

  return (
    <div className={s.wrapperAddNewPackComp}>
      {/*<button onClick={onclickCloseWindow}>X</button>*/}
      <CompWrapperForContent title={"Add new pack"} showCloseModel={true} onClick={onclickCloseWindow}>

        <form onSubmit={handleSubmit(onSubmitHandler)}>

          <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>

            <FormControl sx={{ width: "402px" }} variant="standard">
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


          <Button
            type={"submit"}
            style={{
              background: "#366EFF",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "30px",
              marginTop: "70px",
              width: "100%",
              padding: "17px 0",
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.01em",
              fontWeight: "500"
            }}
          >
            Add New Pack
          </Button>


        </form>
      </CompWrapperForContent>
    </div>
  );
};

