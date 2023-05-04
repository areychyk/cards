import React, { useState } from "react";

import s from './styles.module.css'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Paper
} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from "react-hook-form";
import { ArgLoginType } from "features/auth/auth.api";
import { Button } from "common/components/Button";
import { useAppDispatch } from "app/hooks";

// export const Login = () => {
//   const dispatch = useAppDispatch();
//
//   useEffect(()=>{
//     dispatch(authThunks.login(payload))
//   },[])
//
//   const payload ={
//     email: "ariiychyk@gmail.com",
//     password: "6402413a",
//     rememberMe: false }
//   return (
//     <div>
//       sign-in or login
//     </div>
//   );
// };

export const Login = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {register,handleSubmit,reset} = useForm<ArgLoginType>({
    defaultValues:{
      email:'',
      password:'',
      rememberMe:false
    }
  })

  const handleClickShowPassword =()=> setShowPassword(!showPassword)

  return (
    <Grid container justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
      <Paper sx={{ padding: '20px', marginTop: 6 }}>
        <FormControl>
          <Typography
            marginBottom={'20px'}
            component="h1"
            sx={{ fontSize: '26px', fontWeight: '600' }}
          >
            Sign in
          </Typography>

          <form onSubmit={handleSubmit(data => {
            console.log(data)
            reset()
          })}>
            <FormGroup sx={{ alignItems: 'center', fontSize: '16px', fontWeight: '500' }}>

              <FormControl sx={{ width: '402px' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                <Input id="standard-adornment-password" type={'text'} {...register('email')}/>
                <p style={{ color: 'red', fontSize: '12px' }}>error</p>
              </FormControl>


            <FormControl sx={{ width: '402px' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input id="standard-adornment-password"
                     type={showPassword ? 'text' : 'password'}
                     {...register('password')}
                     endAdornment={
                       <InputAdornment position={"end"}>
                         <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowPassword}
                         >
                           {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityIcon/>}
                         </IconButton>

                       </InputAdornment>
                     }
              />
              <p style={{ color: 'red', fontSize: '12px' }}>error</p>
            </FormControl>

              <FormControlLabel
                sx={{ width: '100%', textAlign: 'left' }}
                label={'Remember me'}
                control={<Checkbox {...register('rememberMe')}/>}
              />
          </FormGroup>

            <Button
              type={'submit'}
              style={{
                borderRadius: '30px',
                marginTop: '40px',
                width: '100%',
                padding: '17px 0',
                fontSize: '16px',
                fontWeight: '500',
              }}
            >
              Sign In
            </Button>

          </form>
        </FormControl>

      </Paper>
    </Grid>
  );
};
