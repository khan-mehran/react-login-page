import React from 'react'
import styles from './signup.module.css'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
// import InputAdornments from './passowrdField/Password'

const SignupForm = () => {
    
    return (
        <>


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
                                    <TextField type="text" placeholder='Full Name' id={styles.name} />
                                    {/* <input type="text" placeholder='Full Name' id={styles.name} /> */}
                                </Grid>

                                <Grid item md={12} sm={12}  >
                                    <p htmlFor="Email" className={styles.label} >Email</p>
                                    <TextField type="email" placeholder='Email Address' id={styles.email} />
                                    {/* <input type="email" placeholder='Email Address' id={styles.email} /> */}
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    
                                    <p htmlFor="password" className={styles.label} >Password</p>
                                    <TextField type="password" placeholder='Password' id={styles.pass} />
                                    
                                </Grid>

                                <Grid
                                    direction="row"
                                    className={styles.terms}
                                    >
                                    <input type="checkbox" id={styles.checkbox} />
                                    <p>I agree to the <Link to='/'> Privacy Policy</Link> & <Link to='/'>Terms of Service</Link></p>
                                </Grid>
                                <button className={styles.SignUp_btn}>
                                    <Link to='/'>Sing Up</Link>
                                </button>
                        </Grid>
                </Grid>
            </Grid>
        </form> 
           
        </>
    )
}

export default SignupForm
