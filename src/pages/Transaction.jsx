import React from 'react'
import {DatePicker, Input, Table} from "antd"
import { useState } from 'react'
import moment from 'moment';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Delete from './Delete';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Analytics from './Analytics';

const { RangePicker } = DatePicker;

function Transaction() {
  const [searchedText,setSearcedText]=useState("")
  const[date,setDate]=useState([])
  const deleteUser=async(id)=>{
    console.warn(id)
  let result= await fetch (`https://pettycash-backend.vercel.app/get-trans/${id}`,{
    method: 'DELETE',
  });
  result=await result.json();
  console.warn(result)
  if(result){
    alert("user deleted successfully")
  }
  }
    const[allTransaction,setAllTransaction]=useState([])
    const[editable,setEditable]=useState(null)
    const columns=[
        {
            title:"Date",
            dataIndex:"date",
            render:(text)=><span>{moment(text).format("DD-MM-YYYY")}</span>
          },
          {
            title:"Voucher No",
            dataIndex:"voucher",
            filteredValue:[searchedText],
            onFilter:(value,record)=>{
              return String(record.voucher).toLowerCase().includes(value.toLowerCase())||
               String(record.type).toLowerCase().includes(value.toLowerCase())||
               String(record.date).toLowerCase().includes(value.toLowerCase())||
               String(record.amount).toLowerCase().includes(value.toLowerCase())

            }  
          },
          {
            title:"Amount",
            dataIndex:"amount",
          },
          {
            title:"Type",
            dataIndex:"type",
            render(text, record) {
              return {
                props: {
                  style: {background: text ==="Paid To" ? "tomato" : "mediumseagreen" }
                },
                children: <div>{text}</div>
              };
            }
          },
          {
            title:"Purpose",
            dataIndex:"purpose",

          },
          {
            title:"Action",
            key:"action",
            render:(text,record) => (
              <div>
             
                {/* <button onClick={()=>{setEditData(record)
                handleOpen()
                }}>Edit </button> */}
              
                {/* <Delete allTransaction={allTransaction} /> */}
                <Link to={"/update-trans/"+ record._id }>Edit</Link>
                <IconButton onClick={()=>deleteUser(record._id)}><DeleteIcon color="primary"/></IconButton>
                
              
                
            
              </div>
            )
          }
        ]

        const getAllTransactions=async()=>{
            // try{
              const user=JSON.parse(localStorage.getItem('user'));
              const res=await axios.get("https://pettycash-backend.vercel.app/get-trans")
              setAllTransaction(res.data)
              console.log(res.data)
            // }
            // catch{
            //   console.log("error")
            // }
          }

          useEffect(()=>{
            getAllTransactions()
          },[])
        
  return (
    <div>

       <Analytics allTransaction={allTransaction} />
       {/* <RangePicker onChange={(values)=>{
       setDate(values.map(item=>{
        return moment(item).format("DD-MM-YYYY")
       }))
      }}/> */}
       <Input.Search placeholder='Search here...' style={{marginBottom:4,marginTop:15}} onSearch={(value)=>{
        setSearcedText(value)
       }} onChange={(e)=>{setSearcedText(e.target.value)}}/>
       <Table columns={columns} className="tb"dataSource={allTransaction}/>
    </div>
  )
}

export default Transaction