import React from 'react'
import styles from './login_form.module.css'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const LoginForm = () => {

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).max(32).required(),
    })

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(SignUpSchema),
      });
    
      const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
      };
   
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.main_form}>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                    
                <Grid container
                    item xs={12}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    
                >
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            id={styles.heading}
                        >
                            <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            >
                                    <Grid item xs={2}
                                        className={styles.back_btn}
                                    >
                                    <Link to='/'><p><KeyboardArrowLeftIcon />Back</p></Link>
                                    </Grid>

                                    <Grid item xs={8}
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center" >
                                        <h3>Login to your account</h3> 
                                    </Grid>
                                    <Grid item xs={2} >
                                        
                                    </Grid>
                            </Grid>
                            
                        </Grid>
                        
                        <Grid direction="row"
                                
                                id={styles.form_fields}>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="Email" className={styles.label} >Email</p>
                                    <TextField {...register('email')} type="email"  placeholder='Email Address' id={styles.email} />
                                    <p className={styles.error}>{errors?.email?.message}</p>
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="password" className={styles.label} >Password</p>
                                    <TextField {...register('password')} type="password"  placeholder='Password' id={styles.pass} />
                                    <p className={styles.error}>{errors?.password?.message}</p>
                                </Grid>

                                
                                <button type="submit" className={styles.Signin_btn}>
                                    Sing In
                                </button>
                        </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm
