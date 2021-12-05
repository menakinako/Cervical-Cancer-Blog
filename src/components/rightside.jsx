import React from 'react'

import styles from './left.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import treatment from '../images/ct.jpg'
import hometreatment from '../images/chm.jpg'
import me from '../images/me.jpg'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.25),
    },
  },
}));




function Right(){

    const classes = useStyles();
  
    return(
        <div  className={styles.container}>

            <div>
            <Grid item component ={Card} xs={12} md={12} className={styles.card}>
            <CardContent>
                      <Typography color="textSecondary" variant="h6" gutterBottom style={{color:"red", fontSize:"20px", fontFamily:"Times Roman"}}>Author</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                     
                      <div>
                        <img src={me}  style={{width:"100px", height:"100px", borderRadius:"50px"}} alt=""/>
                      </div>
                      <Typography variant="subtitle1">
                        I am a web developer. I design modern websites, web services and also work on backend part. I also specialise in content writing.
                      </Typography>
                  </CardContent>
                  </Grid>
                </div>

                  <div  className={styles.separate}>
                  <Grid item component ={Card} xs={12} md={12} className={styles.card}>
                   <CardContent>
                      <Typography color="textSecondary" variant="h6" gutterBottom style={{color:"red", fontSize:"20px", fontFamily:"Times Roman"}}>Trending Now</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <Typography color="textSecondary" style={{textAlign:"left",color:"#2d2d86"}}>Why travelling improves mental health?</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <Typography color="textSecondary" style={{textAlign:"left",color:"#2d2d86"}}>APIs and everything you need to know.</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <Typography  color="textSecondary" style={{textAlign:"left",color:"#2d2d86"}}>Relevance of AI and Ml to drive digital Transformation</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <Typography color="textSecondary" style={{textAlign:"left",color:"#2d2d86"}}>10 Reasons to visit Bali atleast once in lifetime.</Typography>
            </CardContent>
                  </Grid>
                  </div>

                  <div className={styles.separate}>
                  <Grid item component ={Card} xs={12} md={12} className={styles.card}>
                   <CardContent>
                      <Typography  color="textSecondary" variant="h6" gutterBottom style={{color:"red", fontSize:"20px", fontFamily:"Times Roman"}}>Latest Blogs</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <div className={styles.latest}>
                     <div>
                     <div className={styles.lb}>
                      
                     <Typography color="textSecondary" variant="subtitle2" gutterBottom style={{textAlign:"left",color:"#2d2d86"}} >Treatments Of Cervical Cancer</Typography> 
                      <Typography color="textSecondary" variant="subtitle-heading" gutterBottom>Payoja Muduli 23 Feb 2021</Typography> 
                      <img src={treatment} style={{width:"100px", height:"50px"}} alt=""/>
                      
                      </div>
                      </div>
                      </div>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <div>
                     
                      <Typography color="textSecondary" variant="subtitle2" gutterBottom style={{textAlign:"left", color:"#2d2d86"}}>Homemade treatment of cervical cancer</Typography> 
                      <Typography color="textSecondary" variant="subtitle-heading" gutterBottom>Payoja Muduli 23 Feb 2021</Typography> 
                      <img src={hometreatment} style={{width:"100px", height:"50px"}} alt=""/>
                      
                     
                      </div>

                  </CardContent>
                  </Grid>
                  </div>

                  <div className={styles.separate}>
                  <Grid item component ={Card} xs={12} md={12} className={styles.card}>
            <CardContent>
                      <Typography color="textSecondary" variant="h6" gutterBottom style={{color:"red", fontSize:"20px", fontFamily:"Times Roman"}}>Latest Tags</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                     <div className={classes.root}>
                           <Button variant="contained" color="primary">
                             Web development
                           </Button>
                           <Button variant="contained" color="primary">
                              Marketing
                           </Button>
                           <Button variant="contained" color="primary">
                             Design
                           </Button>
                           <Button variant="contained" color="primary">
                              Travel
                           </Button>
                           <Button variant="contained" color="primary">
                              Health
                           </Button>
                      </div>
                     
                  </CardContent>
                  </Grid>
                    </div>
                    <div className={styles.separate}>
            <Grid item component ={Card} xs={12} md={12} className={styles.card}>
            <CardContent>
                      <Typography color="textSecondary" variant="h6" gutterBottom style={{color:"red",  fontSize:"20px", fontFamily:"Times Roman"}}>Connect with Life~Is~Insane</Typography>
                      <hr style={{height:"0.9px", border:"none", color:"#d6d6c2", backgroundColor:"#d6d6c2"}}></hr>
                      <BottomNavigation >
        <BottomNavigationAction color="black" label="Github" value="recents" icon={<GitHubIcon  style={{fill: "#00000"}}/>} />
        <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
        <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
        <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
        </BottomNavigation>
                     
                  </CardContent>
                  </Grid>
                </div>
                  
        </div>
    )
}
 
export default Right