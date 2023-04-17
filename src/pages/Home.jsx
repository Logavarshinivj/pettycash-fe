import React from 'react'
import Button from '@mui/material/Button';

function Home() {
  return (
    <div>
        <h1 className='app-name'>Petty Cash Management</h1>
        
        <img src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/cash-voucher-format/cash/4.webp" className='petty-img'/>
       <div className='dash-btn'> <Button variant="contained" sx={{backgroundColor:"crimson"}}>Get Started !</Button></div>
    </div>
  )
}

export default Home