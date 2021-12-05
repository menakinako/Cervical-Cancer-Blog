import React from 'react'

import styles from './left.module.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cervical from '../images/cervical.jpg'
import me from '../images/me.jpg'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.25),
        marginTop: 20,
      },
    },
  }));

function Left(){

    const classes = useStyles();

    return(
        <div className={styles.container}>

            <div>
            <Grid item component ={Card} xs={12} md={12} className={styles.card}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom style={{color:"#2d2d86", fontWeight:"bold", fontSize:"30px",textAlign:"left"}}>Is Cervical Cancer Anything To Be Worried About?</Typography>
             
                    <div>
                        <img src={me}  style={{width:"40px", height:"40px", borderRadius:"50px", float:"left"}} alt=""/><span>
                        <Typography color="textSecondary" style={{textAlign:"left", fontSize:"15px"}} > Payoja Muduli</Typography>
                        </span>
                      </div>
                <Typography color="textSecondary" style={{textAlign:"left", fontSize:"15px"}} > 5 Jan 2021</Typography>
            <div className={styles.image}>
                <img src={cervical}  alt=""/>
                </div>
                
                <div className={styles.contents}>
                    <div style={{marginTop: "30px"}}>
                      <Typography variant="subtitle-heading">No of active cases of COVID-19
                      Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.
                Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
                            What are my payment options?
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                     
                      </Typography>
                      </div>
                      <Typography color="textSecondary" gutterBottom style={{color:"#2d2d86", fontWeight:"bold", fontSize:"17px",textAlign:"left"}}>What are its Early sign?</Typography>
    
                     <div className={classes.root}>
                      <Button variant="contained" color="primary">
                             Web Design
                           </Button>
                           <Button variant="contained" color="primary">
                             Web development
                           </Button>
                           <Button variant="contained" color="primary">
                              Marketing
                           </Button>
                           <Button variant="contained" color="primary">
                              Research
                           </Button>
                           <Button variant="contained" color="primary">
                              Travel
                           </Button>
                           <Button variant="contained" color="primary">
                              Health
                           </Button>
                           </div>
                      </div>
                  </CardContent>
                  </Grid>
                           
            </div>
            <div className={styles.separate}>
            <Grid item component ={Card} xs={12} md={12} className={styles.card}>
            <CardContent>
            <Typography color="textSecondary" gutterBottom style={{color:"#2d2d86", fontWeight:"bold", fontSize:"24px",textAlign:"left"}}>Leave a Reply</Typography>

              <div className={styles.reply}>
              <form>
                  <div className={styles.fields}>
                     <input type="text" name="" required=""/>
                      <label>Name*</label>
                   </div>
                   <div className={styles.fields}>
                      <input type="text"/>
                      <label>Email*</label>
                   </div>
                   <div className={styles.fields}>
                   <input type="text"/>
                   <label>Your Message*</label>
                   </div>
               
                   <div className={styles.send}>
                       
                    <button className={styles.pxbtn}><span>Submit</span> <i className={styles.arrow}></i></button>
                  
                    </div>
                    
            </form>
            </div>        
           
                  </CardContent>
                  </Grid>
           </div>
        </div>
    )
}
 
export default Left