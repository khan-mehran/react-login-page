import React from 'react'
import styles from './return.module.css'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import * as Yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export const ReturnAddress = () => {

    const SignUpSchema = Yup.object().shape({
        AddressLine1: Yup.string().required(),
        AddressLine2: Yup.string().required(),
        Zip: Yup.string().min(5).required(),
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
                                        <h3>Add a Return Address</h3> 
                                    </Grid>
                                    <Grid item xs={2} >
                                        
                                    </Grid>
                            </Grid>
                            
                        </Grid>
                        
                        <Grid direction="row"
                                
                                id={styles.form_fields}>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="AddressLine1" className={styles.label} >Address Line 1</p>
                                    <TextField {...register('AddressLine1')} type="text"  placeholder='123 Rose' id={styles.name} />
                                    <p className={styles.error}>{errors?.AddressLine1?.message}</p>
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="AddressLine2" className={styles.label} >Address Line 2</p>
                                    <TextField {...register('AddressLine2')} type="text"  placeholder='Apt 123' id={styles.name} />
                                    <p className={styles.error}>{errors?.AddressLine2?.message}</p>
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    
                                    <p htmlFor="Zip" className={styles.label} >Zip Code</p>
                                    <TextField {...register('Zip')}  type="password"  placeholder='12345' id={styles.pass} />
                                    <p className={styles.error}>{errors?.Zip?.message}</p>
                                </Grid>

                                <Grid
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    className={styles.terms}
                                    >
                                    <input type="checkbox" id={styles.checkbox} />
                                    <p>I agree to the <Link to='/'> Privacy Policy</Link> & <Link to='/'>Terms of Service</Link></p>

                                </Grid>
                                
                                <Grid
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    className={styles.terms}
                                    >
                                     <button type='submit' className={styles.Signin_btn}>
                                        Let's Go!
                                    </button>

                                </Grid>

                               
                        </Grid>
                </Grid>
            </Grid>
        </form> 
        </>
    )
}
