import React from 'react'
import styles from './address.module.css'
import Grid from '@mui/material/Grid'
import { ReturnAddress } from '../../components/AddAddress/ReturnAddress'

const Address = () => {
    
    return (
        <>
        <Grid container
                className={styles.add_address}
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
                        <ReturnAddress/>
                       
                    </Grid>

                    <Grid className={styles.sticker_butler}>
                        <img src={'/images/long.png'} alt='logo' className={styles.butler_img} />
                    </Grid>

            </Grid>

        </Grid>
        </>
    )
}

export default Address
