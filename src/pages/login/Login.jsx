import React from 'react'
import styles from './login.module.css'
import Grid from '@mui/material/Grid'
import LoginForm from '../../components/login/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
    
    return (
        <>
        <Grid container
                className={styles.login}
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
                        <LoginForm/>
                    <Grid container
                                direction='row'>

                            <Grid  container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            className={styles.alreday_account}
                            >
                                
                                <p>Don’t have an account?</p>
                                <Link to='/'>Sign Up</Link>
                            </Grid>
                              
                    </Grid> 
                       
                    </Grid>

                    <Grid className={styles.sticker_butler}>
                        <img src={'/images/long.png'} alt='logo' className={styles.butler_img} />
                    </Grid>

            </Grid>

        </Grid>
        </>
    )
}

export default Login
