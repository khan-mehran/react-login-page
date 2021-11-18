import React from 'react'
import styles from './return.module.css'
import Grid from '@mui/material/Grid'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

export const ReturnAddress = () => {
    
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
                                    <p htmlFor="Email" className={styles.label} >Address Line 1</p>
                                    <TextField type="text" placeholder='123 Rose Lane' id={styles.name} />
                                    {/* <input type="email" placeholder='Email Address' id={styles.email} />   */}
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    <p htmlFor="Email" className={styles.label} >Address Line 2</p>
                                    <TextField type="text" placeholder='Apt 123' id={styles.name} />
                                    {/* <input type="email" placeholder='Email Address' id={styles.email} />   */}
                                </Grid>

                                <Grid item md={12} sm={12}>
                                    
                                    <p htmlFor="password" className={styles.label} >Zip Code</p>
                                    <TextField type="password" placeholder='12345' id={styles.pass} />
                                    
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
                                     <button className={styles.Signin_btn}>
                                        <Link to='/'>Let's Go!</Link>
                                    </button>

                                </Grid>

                               
                        </Grid>
                </Grid>
            </Grid>
        </form> 
        </>
    )
}
