import React from 'react'
import styles from './signup.module.css'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


const SignupForm = () => {

    const SignUpSchema = Yup.object().shape({
        name: Yup.string().required(),
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
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            id={styles.heading}
                        >
                            <h3>Sign Up Now</h3>
                        </Grid>
                        
                        <Grid direction="row"
                                
                                id={styles.form_fields}>

                                <Grid  item md={12} sm={12}  >
                                    <p htmlFor="Name" className={styles.label}>Name</p>
                                    <TextField {...register('name')} type="text" placeholder='Full Name' id={styles.name} />
                                    <p className={styles.error}>{errors?.name?.message}</p>
                                </Grid>

                                <Grid item md={12} sm={12}  >
                                    <p htmlFor="Email" className={styles.label} >Email</p>
                                    <TextField {...register('email')} type="email"  placeholder='Email Address' id={styles.email} />
                                    <p className={styles.error}>{errors?.email?.message}</p>
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    
                                    <p htmlFor="password" className={styles.label} >Password</p>
                                    <TextField {...register('password')} type="password"  placeholder='Password' id={styles.pass} />
                                    <p className={styles.error}>{errors?.password?.message}</p>
                                </Grid>

                                <Grid
                                    direction="row"
                                    className={styles.terms}
                                    >
                                    <input type="checkbox" id={styles.checkbox} />
                                    <p>I agree to the <Link to='/'> Privacy Policy</Link> & <Link to='/'>Terms of Service</Link></p>
                                </Grid>
                                <button type='submit' className={styles.SignUp_btn}>
                                    Sing Up
                                </button>
                        </Grid>
                </Grid>
            </Grid>
        </form> 
           
        </>
    )
}

export default SignupForm
