import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Contacto() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <img alt="contact" height="750" src="https://firebasestorage.googleapis.com/v0/b/my-ecommerce-chofi.appspot.com/o/contacto.jpg?alt=media&token=89a1a464-629d-4529-afe9-06efbf150176"></img>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <h3>Contactanos</h3>
              <MailOutlinedIcon/><p>plantasdesofi@gmail.com</p>
              <PhoneOutlinedIcon/><p>11 2232-2342</p>
              <HomeOutlinedIcon/><p>Av Avenida 2334 3D, CABA</p>

          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Contacto
