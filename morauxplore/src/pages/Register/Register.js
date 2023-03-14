import React from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography, TextField, Paper } from '@mui/material';
import Logo from '../../images/Logo.png';
import RegisterPhoto from '../../images/Register.png'
import styles from './Register.module.css'

export default function Register() {
    return (
        <Paper elevation={6}>
            <div className={styles.mainContainer}>
                    <div className={styles.leftContainer}>
                        <img src={Logo} width="203"></img>
                        <img src={RegisterPhoto} width="500"></img>
                    </div>

                    <div className={styles.rightContainer}>
                        <h1>Register </h1>
                        <h3>Let’s get Started !</h3>
                        <TextField id="outlined-basic" label="Team Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <Button variant="contained">Register</Button>
                        <Button variant="contained">Sign up</Button>
                    </div>
                </div>
        </Paper>
                


           
    )
}
