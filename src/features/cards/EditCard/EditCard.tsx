import React, { ChangeEvent, FC, useState } from "react";
import { useAppDispatch } from "common/hooks";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArgUpdateCardType } from "features/cards/cards.api";
import { cardsThunks } from "features/cards/cards.slice";
import { ModalWindow } from "common/components/ModalWindow/ModalWindow";
import { FormControl, FormGroup, Input, InputLabel } from "@mui/material";
import s from "features/cards/AddNewCards/styles.module.css";
import { Button } from "common/components/Button/Button";
import * as yup from "yup";


type Props = {
  setOpenModal: (openModal: boolean) => void
  openModal: boolean
  cardQuestion:string
  cardAnswer:string
  idCard: string

}
type NewCardFormType = {
  questions: string
  answer: string
}
const schema = yup.object().shape({
  questions: yup.string().required("Questions is required"),
  answer: yup.string().required("Answer is required")

});





export const EditCard:FC<Props> = ({setOpenModal,openModal,cardQuestion,cardAnswer,idCard}) => {

const [questions, setQuestions] = useState<string>(cardQuestion)
const [answer, setAnswer] = useState<string>(cardAnswer)



  const dispatch = useAppDispatch();
  const { packId } = useParams();
  const handleClose = () => setOpenModal(false);


  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewCardFormType>({
    defaultValues: {
      questions: "",
      answer: ""

    },
    resolver: yupResolver(schema)
  });


  const onSubmitHandler = (data: NewCardFormType) => {
    const dataUrlParam: ArgUpdateCardType = {
      card: {
        _id: idCard,
        answer: data.answer,
        question: data.questions
      }

    };

    dispatch(cardsThunks.updateCard(dataUrlParam))
      .then(() => {

        dispatch(cardsThunks.getCards({ cardsPack_id: packId }));
      });
    reset();
    setOpenModal(false);
  };




  const onChangeEditQuestions=(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    setQuestions(event.currentTarget.value);

  }

  const onChangeEditAnswer=(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    setAnswer(event.currentTarget.value);

  }
  return (
    <ModalWindow open={openModal} setOpen={setOpenModal} titleNameModalWindow={"Edit card"}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <FormGroup sx={{ alignItems: "center", fontSize: "16px", fontWeight: "500" }}>

          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-newCard">Questions</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
                   {...register("questions")}
                   placeholder="Questions"
                   value={questions}
                   onChange={onChangeEditQuestions}
                   required
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.questions?.message}</p>
          </FormControl>


          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-newCard">Answer</InputLabel>
            <Input id="standard-adornment-password" type={"text"}
                   {...register("answer")}
                   placeholder="Answer"
                   value={answer}
                   onChange={onChangeEditAnswer}
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
  )
};

