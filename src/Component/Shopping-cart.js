import React from "react";
import ItemCart from "./Item-cart";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom' ;


const ShoppingCart = (props)=> {

  const cartItems = props.cartItems.map((item)=>{return <ItemCart cart={item} key={item.id} removeItemCart={props.removeItemCart} decreaseItemQuantity={props.decreaseItemQuantity} incrementItemQuantity={props.incrementItemQuantity} />});
  const hShoppingCart = cartItems.length === 0 ? <h1 className="hItems">Your cart is empty</h1>: <h1 className="hItems">Your shopping cart</h1>;

  
  return (
    <div className="shopping-cart">
      {hShoppingCart}
      <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'}}>
        {cartItems}
      </Box>
      <Card sx={{
          minWidth: 500,
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center'
          }}>
        <CardContent >
          <h3>Total: {props.totalPrice}</h3>
        </CardContent>
        <CardActions sx={{display:'flex',alignItems:'center'}}>
          <Button variant='contained' sx={{ mb:3,backgroundColor: '#3c62ac', mr:1}}>Checkout</Button>
          <Link to="/shop"><Button variant="contained" sx={{ mb:3,backgroundColor: '#3c62ac', ml:1}} endIcon={<ShoppingBagIcon/>}>Go to the Shop </Button></Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default ShoppingCart;
