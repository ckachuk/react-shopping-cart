import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom' ;

const styleButton= {
  marginBottom:3,
  backgroundColor: '#3c62ac',
}

const Homepage = ()=> {
  return (
    <div className="homepage">
      <Card sx={{width:1000,
                display:'flex',
                flexDirection: 'column',
                alignItems:'center',
                backgroundColor: '#ffeeff'}}>
        <CardContent sx={{display:'flex',flexDirection: 'column',alignItems:'center'}}>
         <h1 >Restaurant</h1>
         <h2>Welcome to the online restaurant</h2>
         <h3>To view our products click in this button</h3>
        </CardContent>
        <CardActions>
          <Link to="/shop"><Button variant="contained" sx={styleButton} endIcon={<ShoppingBagIcon/>}>Go to the Shop </Button></Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Homepage;
