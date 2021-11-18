import React from 'react'
import { Link } from 'react-router-dom'
import styles from './reset.module.css'
import Grid from '@mui/material/Grid'
import { ResetPassword } from '../../components/resetPassword/ResetPassword'

const Reset = () => {
    
    return (
        <>
        <Grid container
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
                        <ResetPassword/>

                        <Grid container
                                direction='row'>

                            <Grid  container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            className={styles.alreday_account}
                            >
                                
                                <p>Need to login or sign up?</p>
                                <Grid direction='row'>
                                    <Link to='/login'>Sign In</Link>     <Link to='/'>Sign Up</Link>
                                </Grid>
                            </Grid>
                        </Grid> 
                       
                    </Grid>

                    <Grid className={styles.sticker_butler}>
                        <img src={'/images/long.png'} alt='logo' />
                    </Grid>

            </Grid>

        </Grid>
        </>
    )
}

export default Reset
