import React from "react";
import ItemShop from "./Item-shop";
import Box from '@mui/material/Box';

const Shop = (props)=> {
  const items = props.items.map((item)=>{
    return <ItemShop key={item.id} data={item} addItem={props.setItemToCart}/>
  })

  return (
    <div className="shop">
      <h1 className="hItems">Shop</h1>
      <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'}}>
        {items}
      </Box>
    </div>
  );
}

export default Shop;
