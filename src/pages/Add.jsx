import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useState } from 'react'
import Button from '@mui/material/Button';

function Add() {
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
      const [voucherError, setVoucherError] = useState('')
      const [amountError, setAmountError] = useState('')
      const [typeError, setTypeError] = useState('')
      const [purposeError, setPurposeError] = useState('')
      const [dateError, setDateError] = useState('')
      const handleSubmit=async()=>{
        setVoucherError('')
        setAmountError('')
        setTypeError('')
        setPurpose('')
        setDateError('')
        if (!voucher) {
          setVoucherError('Voucher is required*')
         
        }
        else if (isNaN(Number(voucher))) {
          setVoucherError("Voucher should be a number*");
        }
        else{
          setVoucherError("");
        }

        if (!amount) {
          setAmountError('amount is required*')
        }
        else if (isNaN(Number(amount))) {
          setAmountError("Amount should be a number*");
        }
        else{
          setAmountError("");
        }
        if (!type) {
          setTypeError('Type is required*')
        }
        else{
          setTypeError("");
        }
        if (!purpose) {
          setPurposeError('Purpose is required*')
         
        }
        else{
          setPurposeError("");
        }
        if (!date) {
          setDateError('Date is required*')
         
        }
        else{
          setDateError("");
        }
        
        const user=JSON.parse(localStorage.getItem('user'));
        let result=await fetch("http://localhost:4000/add-trans", 
        {
          method: 'POST',
          body: JSON.stringify({voucher,
            amount,
            type,
            purpose,
            date,
            userId:user._id
          }),
          headers: { 'Content-Type': 'application/json'}
        })
      
        result= await result.json()
      }
  return (
    <div>
      
          <div className='add-form'>
          <h2 id="child-modal-title">Add Receipt</h2>
          <TextField  id="outlined-basic" label="Voucher" type="text" color="secondary"  placeholder="Enter the Voucher number" onChange={(event)=>setVoucher(event.target.value)}></TextField>
          {voucherError && <p className="error" style={{ color: "red" }}>{voucherError}</p>}
          <TextField  id="outlined-basic" label="Amount" type="text" color="secondary"  placeholder="Enter the Amount" onChange={(event)=>setAmount(event.target.value)}></TextField>
          {amountError && <p className="error" style={{ color: "red" }}>{amountError}</p>}
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select name="type" color="secondary"  onChange={(event)=>setType(event.target.value)}>
          <MenuItem sx={{color:"lightpink"}} value="Paid To">Paid To</MenuItem>
          <MenuItem value="Received From">Received From</MenuItem>
          </Select>
          {typeError && <p className="error" style={{ color: "red" }}>{typeError}</p>}
          <TextField color="secondary"  id="outlined-basic" label="Purpose" type="text"  placeholder="Enter the description"  onChange={(event)=>setPurpose(event.target.value)}></TextField>
          {purposeError && <p className="error" style={{ color: "red" }}>{purposeError}</p>}
          <TextField color="secondary"  id="outlined-basic"  type="date"  placeholder="Enter the reference" onChange={(event)=>setDate(event.target.value)}></TextField>
          {dateError && <p className="error" style={{ color: "red" }}>{dateError}</p>}
          <div className='btn'>
          <Button variant="contained" onClick={handleSubmit}   sx={{backgroundColor:"purple"}}type="submit" >Save</Button>
       
          </div>
          </div>
     
    </div>
  )
}

export default Add



// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { FormControl, MenuItem } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import { useState } from 'react'
// import Button from '@mui/material/Button';

// function Add() {
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };

//   const [voucher, setVoucher] = useState("");
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [date, setDate] = useState("");

//   const handleVoucherChange = (event) => {
//     if (!/^[0-9]+$/.test(event.target.value)) {
//       alert("Voucher number should be a numeric value.");
//     } else {
//       setVoucher(event.target.value);
//     }
//   }

//   const handleAmountChange = (event) => {
//     if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(event.target.value)) {
//       alert("Amount should be a numeric value with up to 2 decimal places.");
//     } else {
//       setAmount(event.target.value);
//     }
//   }

//   const handleTypeChange = (event) => {
//     setType(event.target.value);
//   }

//   const handlePurposeChange = (event) => {
//     setPurpose(event.target.value);
//   }

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   }

//   const handleSubmit = async () => {
//     if (!voucher || !amount || !type || !purpose || !date) {
//       alert("Please fill out all fields.");
//     } else {
//       const user = JSON.parse(localStorage.getItem('user'));
//       let result = await fetch("http://localhost:4000/add-trans", {
//         method: 'POST',
//         body: JSON.stringify({
//           voucher,
//           amount,
//           type,
//           purpose,
//           date
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });

//       result = await result.json();
//     }
//   }

//   return (
//     <div>
//       <div className='add-form'>
//         <h2 id="child-modal-title">Add Receipt</h2>
//         <TextField
//           id="outlined-basic"
//           label="Voucher"
//           type="text"
//           color="secondary"
//           placeholder="Enter the Voucher number"
//           onChange={handleVoucherChange}
//         />
//          {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
//         <TextField
//           id="outlined-basic"
//           label="Amount"
//           type="text"
//           color="secondary"
//           placeholder="Enter the Amount"
//           onChange={handleAmountChange}
//         />
//          {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
//         <InputLabel id="demo-simple-select-label">Type</InputLabel>
//         <Select
//           name="type"
//           color="secondary"
//           onChange={handleTypeChange}
//         >
//           <MenuItem sx={{ color: "lightpink" }} value="Paid To">Paid To</MenuItem>
//           <MenuItem value="Received From">Received From</MenuItem>
//         </Select>
//         {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
//         <TextField color="secondary"  id="outlined-basic" label="Purpose" type="text"  placeholder="Enter the description"  onChange={handlePurposeChange}></TextField>
//         {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
//           <TextField color="secondary"  id="outlined-basic"  type="date"  placeholder="Enter the reference" onChange={handleDateChange}></TextField>
//           {emailError && <p className="error" style={{ color: "red" }}>{emailError}</p>}
//           <div className='btn'>
//           <Button variant="contained" onClick={handleSubmit}   sx={{backgroundColor:"purple"}}type="submit" >Save</Button>
       
//           </div>
//           </div>
     
//     </div>
//   )
// }

// export default Add




// import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { FormControl, MenuItem } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import Select from '@mui/material/Select';
// import { useState } from 'react'
// import Button from '@mui/material/Button';

// function Add() {
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };
  
//   const [voucher, setVoucher] = useState("");
//   const [voucherError, setVoucherError] = useState("");
  
//   const [amount, setAmount] = useState("");
//   const [amountError, setAmountError] = useState("");
  
//   const [type, setType] = useState('');
//   const [typeError, setTypeError] = useState("");
  
//   const [purpose, setPurpose] = useState('');
//   const [purposeError, setPurposeError] = useState("");
  
//   const [date, setDate] = useState("");
//   const [dateError, setDateError] = useState("");
  
//   const handleSubmit = async () => {
//     let isValid = true;
    
//     // Validate voucher (required)
//     if (!voucher.trim()) {
//       setVoucherError("Voucher number is required.");
//       isValid = false;
//     } else {
//       setVoucherError("");
//     }
    
//     // Validate amount (required, numeric)
//     if (!amount.trim()) {
//       setAmountError("Amount is required.");
//       isValid = false;
//     } else if (isNaN(Number(amount))) {
//       setAmountError("Amount should be a number.");
//       isValid = false;
//     } else {
//       setAmountError("");
//     }
    
//     // Validate type (required)
//     if (!type.trim()) {
//       setTypeError("Type is required.");
//       isValid = false;
//     } else {
//       setTypeError("");
//     }
    
//     // Validate purpose (required)
//     if (!purpose.trim()) {
//       setPurposeError("Purpose is required.");
//       isValid = false;
//     } else {
//       setPurposeError("");
//     }
    
//     // Validate date (required)
//     if (!date.trim()) {
//       setDateError("Date is required.");
//       isValid = false;
//     } else {
//       setDateError("");
//     }
    
//     if (isValid) {
//       const user=JSON.parse(localStorage.getItem('user'));
//       let result=await fetch("http://localhost:4000/add-trans",
//       {
//         method: 'POST',
//         body: JSON.stringify({
//           voucher,
//           amount,
//           type,
//           purpose,
//           date
//         }),
//         headers: { 'Content-Type': 'application/json'}
//       });
      
//       result = await result.json();
//     }
//   };
  
//   return (
//     <div>
//       <div className='add-form'>
//         <h2 id="child-modal-title">Add Receipt</h2>
        
//         <TextField
//           id="voucher"
//           label="Voucher"
//           type="text"
//           color="secondary"
//           placeholder="Enter the Voucher number"
//           value={voucher}
//           onChange={(event) => setVoucher(event.target.value)}
//           error={Boolean(voucherError)}
//           helperText={voucherError}
//         />
//          <TextField
//           id="outlined-basic"
//           label="Amount"
//           type="text"
//           color="secondary"
//           placeholder="Enter the Amount"
//           onChange={(event)=>setAmount(event.target.value)}
//           error={Boolean(voucherError)}
//           helperText={voucherError}
//         />
//         <InputLabel id="demo-simple-select-label">Type</InputLabel>
//         <Select
//           name="type"
//           color="secondary"
//           onChange={(event)=>setType(event.target.value)}
//           error={Boolean(voucherError)}
//           helperText={voucherError}
//         >
//           <MenuItem sx={{ color: "lightpink" }} value="Paid To">Paid To</MenuItem>
//           <MenuItem value="Received From">Received From</MenuItem>
//         </Select>
//         <TextField color="secondary"  id="outlined-basic" label="Purpose" type="text"  placeholder="Enter the description"  onChange={handlePurposeChange}></TextField>
//           <TextField color="secondary"  id="outlined-basic"  type="date"  placeholder="Enter the reference" onChange={handleDateChange}></TextField>
//           <div className='btn'>
//           <Button variant="contained" onClick={handleSubmit}   sx={{backgroundColor:"purple"}}type="submit" >Save</Button>
       
//           </div>
//           </div>
     
//     </div>
//   )
// }

// export default Add
        
