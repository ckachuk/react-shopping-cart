import React, {useState} from "react";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#112546',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:'white',
};

const ItemCart = (props)=> {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="item-cart" >
      <Card sx={{
        minWidth: 250, 
        m: 5, 
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffeeff'
        }}>
        <CardActions sx={{ alignSelf:'flex-end'}}>
          <IconButton  value={props.cart.name} onClick={handleOpen}><ClearIcon/></IconButton>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Delete item from cart
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure?
              </Typography>
              <Box sx={{display:'flex',
                        justifyContent: 'center',
                        mt:3}}>
                <Button variant="outlined" onClick={props.removeItemCart} value={props.cart.name} sx={{ color:'whitesmoke',mr: 2, mt:1 }}>Yes</Button>
                <Button variant="outlined" onClick={handleClose} sx={{  color:'whitesmoke', ml: 2, mt:1 }}>No</Button>
              </Box>
            </Box>
          </Modal> 
        </CardActions>
       
        <CardContent sx={{display:'flex' ,flexDirection: 'column',alignItems: 'center',}}>
          <img src={props.cart.imgItem} alt={props.cart.name} className="imgItemCart"/>
          <h2>{props.cart.name}</h2>
          <h3>Price: {props.cart.price}</h3>
        </CardContent>
        

        <CardActions sx={{
          display:'flex',
          flexWrap: 'nowrap',
          justifyContent: 'center', 
          mb:2}}>
          <p className='pCartItem'>Quantity</p> 
          <IconButton   value={props.cart.name} onClick={props.decreaseItemQuantity}><RemoveCircleIcon/></IconButton> 
          <p className='pCartItem'>{props.cart.quantity}</p>
          <IconButton  sx={{ ml:1, }} value={props.cart.name} onClick={props.incrementItemQuantity}><AddCircleIcon/></IconButton> 
        </CardActions>
         
      </Card>
    </div>
  );
}

export default ItemCart;
