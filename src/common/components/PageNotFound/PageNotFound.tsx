import React from "react";
import s from './styles.module.css'
import { Button } from "common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import error404 from 'common/assets/images/Error 404.svg'
export const PageNotFound = () => {
  const navigate = useNavigate()

  const onClickBackToHomePage=()=>{
    navigate('packsList')
  }
  return (
    <div className={s.wrapperNorFound}>

      <div className={s.wrapperTextAndButton}>
        <h2 className={s.title}>Ooops!</h2>
        <p className={s.text}>Sorry! Page not found!</p>
        <Button title={'Back to home page'}onClickHandler={onClickBackToHomePage} />
      </div>
<div>
  <img className={s.avatar} src={error404} alt={'Page not found'}/>

</div>

    </div>
  );
};

