import { Container, Typography } from '@mui/material'
import React from 'react'
import styles from './CountdownTimer.module.css'
function CountdownTimer() {
  return (
    <div className={styles.CountdownTimerContainer}>
      <Container sx={{width:{xs:'350px',sm:'400px',md:'550px'}}} className={styles.tagsContainer}>
        <Typography className={styles.tagText} >Days</Typography>
        <Typography className={styles.tagText} >Hours</Typography>
        <Typography  className={styles.tagText}>Minutes</Typography>
        <Typography className={styles.tagText} >Seconds</Typography>

      </Container>
      <Container sx={{pl:3,ml:{md:2},width:{xs:'350px',sm:'400px',md:'570px',lg:'590px'},}} className={styles.timer}>
        <Typography sx={{fontSize:{xs:'43px',sm:'50px',md:'68px'}}} className={styles.timerText}>08 : 12 : 44 : 28</Typography>
        
        </Container>
    </div>
  )
}

export default CountdownTimer
