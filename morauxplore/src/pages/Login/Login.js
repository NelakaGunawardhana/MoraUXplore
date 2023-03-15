import React from "react";
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  Paper,
  Container,
  FormControl,
  InputLabel,
} from "@mui/material";
import Logo from "../../images/Logo.png";
import RegisterPhoto from "../../images/SignUp.png";
import styles from "./Login.module.css";
import InputBase from "@mui/material/InputBase";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: '14px',
    fontFamily: 'Mulish',
    fontWeight: '400',
    lineHeight: '20px',
    letterSpacing: '0.3px',
    width: "auto",
    padding: "10px 12px",
    color:'#0A2647',
    
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Login() {
  return (
    <div className={styles.main}>
      <Card
        elevation={2}
        sx={{ py: 0, my: 10, width: {xs:"330px",sm:"500px",md:"800px",lg:"948px"},mx:0,borderRadius:'30px' ,display:'flex',flexDirection:{xs:'column',md:'row'}}}
        className={styles.mainContainer}
      >
        <Container
          sx={{ width: {xs:"350px",sm:"500px",md:"430px",lg:"520px"}, pt: 5 ,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
          className={styles.leftContainer}
        >
            <Box
          component="img"
            sx={{
                width: { lg: "203px", sm: "190px", xs: "150px" },
            }}
            alt="Register log"
            src={Logo}
          />
          
          <Box
          component="img"
            sx={{
                width: { lg: "600px", md: "500px", sm: "480px", xs: "350px" },
            }}
            alt="Register Image"
            src={RegisterPhoto}
          />
          
        </Container>

        <Container
          sx={{
             width: {xs:"350px",md:"430px",lg:"520px"},
            py: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={styles.rightContainer}
        >
          <Typography
            sx={{
              fontFamily: "Mulish",
              font: "Mulish",
              fontWeight: "700",
              fontSize: { xs: "38px", md: "48px" },
              lineHeight: "60px",
              letterSpacing: "0.3px",
              color: "#0A2647",
            }}
          >
            Sign In
          </Typography>
          <Typography
            sx={{
              fontFamily: "Mulish",
              font: "Mulish",
              fontWeight: "700",
              fontSize: { xs: "20px", md: "24px" },
              lineHeight: "30px",
              letterSpacing: "0.4px",
              color: "#0A2647A6",
            }}
          >
            Let’s get Continue !
          </Typography>
          <FormControl variant="standard" sx={{py:1,my:1}}>
            <InputLabel sx={{fontFamily:'Mulish',fontStyle:'normal',fontWeight:'700',fontSize:'15px',lineHeight:'19px',letterSpacing:'0.3px',color:'#0A2266'}} shrink >
              EMAIL
            </InputLabel>
            <BootstrapInput
              defaultValue="EMAIL"
             
            />
          </FormControl >
          <FormControl variant="standard" sx={{py:1,my:1}}>
            <InputLabel sx={{fontFamily:'Mulish',fontStyle:'normal',fontWeight:'700',fontSize:'15px',lineHeight:'19px',letterSpacing:'0.3px',color:'#0A2266'}} shrink >
              PASSWORD
            </InputLabel>
            <BootstrapInput
              defaultValue="PASSWORD"
              
            />
          </FormControl>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              pt: 5,
             width:{md:'100%',lg:'80%'}
            }}
            className="buttonContainer"
          >
            <Button style={{marginRight:'10px'}} variant="contained">SIGN IN</Button>
            <Button variant="contained">REGISTER</Button>
          </Container>
        </Container>
      </Card>
    </div>
  );
}
