import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useParams,Navigate,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';
const Edit = ({date1}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const[voucher,setVoucher]=useState("")
  const [amount,setAmount]=useState("")
  const [type, setType] = useState('');
  const [purpose, setPurpose] = useState('');
  const[date,setDate]=useState("")
  const{id}=useParams()
  
  const navigate=useNavigate()
  useEffect(()=>{
    getTransaction()

  },[])


  const getTransaction=async()=>{
    var result=await fetch(`https://pettycash-backend.vercel.app/get-trans/${id}`)
    result= await result.json()
    console.log(result)
    console.log(result.amount)
    console.log(result.date)
    setVoucher(result.voucher)
    setAmount(result.amount)
    setType(result.type)
    setPurpose(result.purpose)
    setDate(result.date)
    
   
  }
  

    const updateTransaction=async()=>{
        let result=await fetch(`https://pettycash-backend.vercel.app/update-trans/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ voucher,amount,type,purpose,date}),
          headers: { 'Content-Type': 'application/json'}
        })
      
        result= await result.json()
        if(result){
          navigate("/transaction")
        }
        
      }
  return (
    <div>
    
        <div className='add-form'>
          <h2 id="child-modal-title">Add Receipt</h2>
          <TextField color="secondary"  id="outlined-basic" label="Voucher" type="text"  placeholder="Enter the Voucher number" value={voucher} onChange={(event)=>setVoucher(event.target.value)}></TextField>
          <TextField color="secondary"  id="outlined-basic" label="Amount" type="text"  placeholder="Enter the Amount" value={amount} onChange={(event)=>setAmount(event.target.value)}></TextField>
          <InputLabel color="secondary"  id="demo-simple-select-label">Type</InputLabel>
          <Select color="secondary" name="type"  value={type} onChange={(event)=>setType(event.target.value)}>
          <MenuItem sx={{color:"lightpink"}} value="Paid To">Paid To</MenuItem>
          <MenuItem value="Received From">Received From</MenuItem>
          </Select>
          <TextField color="secondary"  id="outlined-basic" label="Purpose" type="text"  placeholder="Enter the description" value={purpose}  onChange={(event)=>setPurpose(event.target.value)}></TextField>
          <TextField color="secondary"  id="outlined-basic"  type="date"  placeholder="Enter the date" value={date} onChange={(event)=>setDate(event.target.value)}></TextField>
          <div className='btn'>
          <Button variant="contained" onClick={updateTransaction}   sx={{backgroundColor:"lightpink"}}type="submit" >Save</Button>
          </div>
    </div>
    </div>

  )
}

export default Edit