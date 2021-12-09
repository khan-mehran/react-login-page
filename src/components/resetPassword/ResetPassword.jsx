import React from 'react'
import styles from './reset_pass.module.css'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export const ResetPassword = () => {
    
    const SignUpSchema = Yup.object().shape({
        Email: Yup.string().email().required(),
    })

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
        resolver: yupResolver(SignUpSchema),
      });
    
      const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
      };
  
    
    return (
        <>
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
                                    <Link to='/login'><p><KeyboardArrowLeftIcon />Back</p></Link>
                                    </Grid>

                                    <Grid item xs={8}
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center" >
                                        <h3>Reset Your Password</h3> 
                                    </Grid>
                                    <Grid item xs={2} >
                                        
                                    </Grid>
                            </Grid>
                            
                        </Grid>
                        
                        <Grid direction="row"
                                
                                id={styles.form_fields}>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="Email" className={styles.label} >Email</p>
                                    <TextField {...register('Email')} type="email"  placeholder='Email Address' id={styles.email} />
                                    <p className={styles.error}>{errors?.Email?.message}</p>
                                </Grid>

                                
                                <button type='submit'  className={styles.Signin_btn}>
                                    Send Me a Link
                                </button>
                        </Grid>
                </Grid>
            </Grid>
        </form> 
        </>
    )
}
