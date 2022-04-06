import React from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const styleButton= {
  marginBottom:3,
  backgroundColor: '#3c62ac',
}
const ItemShop = (props)=> {
  return (
    <div className="item-shop">
      <Card sx={{m:5,
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: '#ffeeff',
      }}>
        <CardContent sx={{display:'flex',
                    flexDirection:'column',
                    alignItems: 'center'}}>         
          <img src={props.data.imgItem} alt={props.data.name} className="imgItemShop"/>
          <h2>{props.data.name}</h2>
          <p>{props.data.desc}</p>
          <h3>Price: {props.data.price}</h3>
        </CardContent>
        <CardActions>
          <Button variant="contained" sx={styleButton} value={props.data.name} onClick={props.addItem} startIcon={<AddShoppingCartIcon />}>Add cart</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemShop;
