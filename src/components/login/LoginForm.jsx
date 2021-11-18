import React from 'react'
import styles from './login_form.module.css'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import TextField from '@mui/material/TextField'

const LoginForm = () => {
    return (
        <form className={styles.main_form}>
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
                                    <TextField type="email" placeholder='Email Address' id={styles.email} />
                                    {/* <input type="email" placeholder='Email Address' id={styles.email} />   */}
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="password" className={styles.label} >Password</p>
                                    <TextField type="password" placeholder='Password' id={styles.pass} />
                                    {/* <input type="password" placeholder='Password' id={styles.pass} /> */}
                                </Grid>

                                
                                <button className={styles.Signin_btn}>
                                    <Link to='/login'>Sing In</Link>
                                </button>
                        </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default LoginForm
