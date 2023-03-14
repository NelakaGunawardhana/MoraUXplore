import { Box, Button, Card, Container, Typography } from '@mui/material'
import React from 'react'
import styles from './Dashboard.module.css'
import Logo from '../../images/Logo.png';
import DashboardImage from '../../images/DashboardImage.svg'

import CountdownTimer from '../../components/CountdownTimer';
function Dashboard() {
  return (
    <Container className={styles.main}>
      <Card className={styles.dashboardCard} elevation={2} sx={{width:{lg:'80wh'},height:{lg:'1100px'},borderRadius:"30px",my:{xs:2,md:10},pt:8,pb:8}}>
      <img src={Logo} width="203"></img>
      <Typography sx={{fontFamily:'Poppins',font:'Poppins',fontWeight:'700',fontSize:{xs:'30px',md:'36px'},lineHeight:'54px',letterSpacing:'10.5%',mt:5,color:'#E15AF4'}}>COMING SOON...</Typography>
      <CountdownTimer/>
      <Button className={styles.signOutButton} variant="contained" sx={{color:'#FFFFFF',backgroundColor:'#E15AF4',borderRadius:'4px',width:'99px',height:'28px'}}>SIGN OUT</Button>
      
      <Box
        component="img"
        sx={{
          width: { lg: '655px',md:'500px' ,sm:'400px',xs:'300px'} 
        }}
        alt="DashBoard Image"
        src={DashboardImage}
      />
   
      </Card>
    </Container>
  )
}

export default Dashboard
