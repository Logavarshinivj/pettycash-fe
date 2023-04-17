import React from 'react'
import {Progress} from "antd"
import { Card ,CardContent} from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
const Analytics = ({allTransaction}) => {
  const totalTransaction=allTransaction.length
  const totalIncomeTransaction=allTransaction.filter(transaction=>transaction.type==="Paid To")
  const totalExpenseTransaction=allTransaction.filter(transaction=>transaction.type==="Received From") 
  const totalIncome=(totalIncomeTransaction.length/totalTransaction)*100
  const totalExpense=(totalExpenseTransaction.length/totalTransaction)*100
  const totalStatus=allTransaction.reduce(
    (acc,trans)=>acc + trans.amount,0
  )
const totalCredit=allTransaction.filter(transaction=>transaction.type==="Received From").reduce((acc,trans)=>acc + trans.amount,0)
const totalDebit=allTransaction.filter(transaction=>transaction.type==="Paid To").reduce((acc,trans)=>acc + trans.amount,0)
const Balance=totalCredit-totalDebit

const credit=(totalCredit/totalStatus)*100
const debit=(totalDebit/totalStatus)*100
const styles={
  card1:{
     background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
     
  },
  card2:{
    background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
    boxShadow: "0px 10px 20px 0px #FDC0C7",
  },
  card3:{
    background:
    "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
  boxShadow: "0px 10px 20px 0px #F9D59B",
  }
  
}
  return (
  

      
  <div className="card">
  <Card  style={styles.card1}   >
    <CardContent>
    <AccountBalanceIcon/>
    <h3>Balance:{Balance}</h3>
    </CardContent>
  </Card>
  <Card style={styles.card2} >
    <CardContent>
    <TrendingUpIcon/>
      <div className="card1">
      
    <h3>Credited: {totalCredit}</h3>
    <Progress strokeColor={"mediumseagreen"}   percent={credit.toFixed(0)}/>
    </div>
    </CardContent>
  </Card>
  <Card style={styles.card3} >
    <CardContent>
      <TrendingDownIcon/>
      <div className="card2">
    <h3>Debited: {totalDebit}</h3>
    <Progress strokeColor={"tomato"}  percent={debit.toFixed(0)}/>
    </div>
    </CardContent>
  </Card>
</div>
   
    
  )
}

export default Analytics

{/* <div className='analytics2'>
      <Card sx={{backgroundColor:"#f8bbd0"}}>
      <CardContent>
        <div className='content2'>
        <h3>Balance:{Balance}</h3>
        <br></br>
        <h4  className="cash-in">Credited: {totalCredit}</h4>
        <h4 className="cash-out">Debited: {totalDebit}</h4>
      </div>
      <br></br>
      <div className='progress2'>
        <Progress strokeColor={"mediumseagreen"}  percent={credit.toFixed(0)}/>
        <Progress strokeColor={"tomato"}  percent={debit.toFixed(0)}/>
        
        
      </div>
      </CardContent>
      </Card>
      </div>
      </div> */}