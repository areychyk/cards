import React, { FC, useEffect, useState } from "react";
import { CompWrapperForContent } from "common/components/CompWrapperForContent";
import { BackSpace } from "common/components/BackSpace/BackSpace";
import { useNavigate, useParams } from "react-router-dom";
import s from "./styles.module.css";
import { cardsThunks } from "features/cards/cards.slice";
import { clearCards } from "common/actions";
import { useAppDispatch } from "common/hooks";
import { selectCards } from "common/selectors/cards.selectors";
import { useSelector } from "react-redux";
import { Button } from "common/components/Button/Button";
import { GradeCard } from "features/cards/LearnCards/GradeCard/GradeCard";
import { CardGradeType, ResponseTypeCards } from "features/cards/cards.api";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";


type Props = {}

const grades = ["Did not know", "Forgot", "A lot of thought", "Сonfused", "Knew the answer"];

const getCard = (cards: ResponseTypeCards[]) => {
  const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
      const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    }
    , { sum: 0, id: -1 });


  return cards[res.id + 1];
};

export const LearnCards: FC<Props> = ({}) => {

  const [showGrade, setShowGrade] = useState<boolean>(false);
  const [first, setFirst] = useState<boolean>(true);
  const [valueGrade, setValueGrade] = React.useState<CardGradeType>(5);
  const navigate = useNavigate();
  const { packId } = useParams();

  const cards = useSelector(selectCards);

  const dispatch = useAppDispatch();
  const [card, setCard] = useState<ResponseTypeCards>();

  useEffect(() => {
    if (first) {
      dispatch(cardsThunks.getCards({ cardsPack_id: packId, pageCount: 100 }));
      setFirst(false);
    }
    if (cards && cards.cards.length > 0) {
      setCard(getCard(cards.cards));
    }

    return () => {

    };
  }, [packId, cards, first]);

  const onclickBackPackList = () => {
    navigate("/packsList");
    dispatch(clearCards());
  };


  const onClickShowAnswer = () => {

    setShowGrade(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueGrade(Number(event.currentTarget.value) as CardGradeType);

  };


  const onClickNextCard = () => {
    setShowGrade(false);
    if (cards && cards.cards.length > 0) {
      if(card){
        dispatch(cardsThunks.gradeCard({grade:valueGrade,card_id:card._id}))
      }

      setCard(getCard(cards.cards));
    }
  };


  return (
    <div>
      <BackSpace title={"Back to Packs List"} onClickHandler={onclickBackPackList} />
      <div className={s.BlockWithTitle}>
        <p className={s.title}>Learn {cards?.packName}</p>
      </div>
      <CompWrapperForContent>

        <p className={s.questionAndAnswer}><span className={s.fatFont}>Question:</span> {card?.question}
        </p>
        <p className={s.text}>Количество попыток ответов на вопрос: <span className={s.fatFont}>{card?.shots}</span></p>
        {
          showGrade && (
            <>
              <p className={s.questionAndAnswer}><span className={s.fatFont}>Answer:</span> {card?.answer}
              </p>

              <FormControl className={s.blockGradeCard}>
                <FormLabel id="demo-controlled-radio-buttons-group">Rate yourself:</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={valueGrade}
                  onChange={handleChange}
                >
                  {grades.map((grade, index) => (
                    <FormControlLabel key={index} value={index + 1} control={<Radio />} label={grade} />
                  ))}


                </RadioGroup>
              </FormControl>

            </>)

        }


        {
          !showGrade
            ? <Button title={"Show answer"} onClickHandler={onClickShowAnswer} />
            : <Button title={"Next"} onClickHandler={onClickNextCard} />
        }

      </CompWrapperForContent>
    </div>

  );
};

