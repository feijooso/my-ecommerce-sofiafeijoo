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
          <Paper className={classes.paper}>img</Paper>
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
