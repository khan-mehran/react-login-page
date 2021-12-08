import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../../components/signup/SignupForm'
import styles from './sign_up.module.css'
import Grid from '@mui/material/Grid'

const SignUp = () => {
    
    return (
        <>
        <Grid container
                className={styles.signup}
                direction="row"
                justifyContent="center"
                alignItems="center">
            <Grid item md={12}  xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img src={'/images/logo.png'} alt='logo' className={styles.logo} />
                    </Grid>
                   
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                    
                       <SignupForm />
                    
                        <Grid container
                                direction='row'>

                            <Grid  container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            className={styles.alreday_account}
                            >
                                
                                <p>Already have an account?</p>
                                <Link to='/login'>Sign In</Link>
                            </Grid>
                        </Grid> 
                        
                    </Grid>


            </Grid>
                    <Grid container item md={12}  xs={12}
                     className={styles.sticker_butler}>
                        <img src={'/images/long.png'} alt='logo' className={styles.butler_img} />
                    </Grid>

        </Grid>
        </>
    )
}

export default SignUp
