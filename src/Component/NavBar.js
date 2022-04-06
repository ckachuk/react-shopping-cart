
import React from "react";
import {Link} from 'react-router-dom' ;
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const NavBar = (props)=> {
  return (
    <div className="nav-bar">
      <Box sx={{
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        background: '#140f07',
      }}>
      
        <Link to="/home" className="linkHome"><RestaurantIcon fontSize="small"/> Home</Link>
        <Link to="/shop" className="linkShop">Shop</Link>
        <Link to="/shopping-cart" className="shoppingCartLink">
          <IconButton aria-label="cart" >
            <StyledBadge badgeContent={props.cartItemsNumber} color="primary">
              <ShoppingCartIcon className="shoppingCartIcon" sx={{color: '#bcf9f9'}}/>
            </StyledBadge>
          </IconButton>
        </Link>
        
      </Box>
    </div>
  );
}

export default NavBar;
