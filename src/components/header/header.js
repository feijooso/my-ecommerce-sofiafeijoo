import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import img from './logo.png';
import './header.css';

function header() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <img src={img} alt='logo' width='80px'/>

                    <Typography variant='h6'>
                        Las plantas de Sofi
                    </Typography>

                    <div className='menu'>
                        <Button color="inherit">Plantas</Button>
                        <Button color="inherit">Macetas</Button>
                        <Button color="inherit">Accesorios</Button>
                        <Button color="inherit">FAQ</Button>
                    </div>



                </Toolbar>
            </AppBar>
        </div>
    )
}

export default header
