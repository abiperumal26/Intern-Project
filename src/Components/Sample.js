import React from 'react';
import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
const Sample=()=>{
    const[store,setstore]=useState([
        {id:1,name:'Ramasamy Villa',Address:'1901 Thornridge Cir. Shiloh 81063'},
        {id:2,name:'Lakshmi Villa',Address:'2715 Ash Dr. San Jose, Dubai'},
        {id:3,name:'Abinaya Villa',Address:'2464 Royal Ln. Mesa, 45463'},
        {id:4,name:'Abi Villa',Address:'2715 Ash Dr. San Jose, Dubai'}
    ])
    return(
        <div style={{
            columnCount:'4',
           
        }}>
        {store.map((item)=>{
            return(
            <p key={item.id} style={{
                border:'1px solid black',
                margin:'5px'
            }}>
                <p>{item.name}</p>
                <p><IoLocationOutline />{item.Address}</p>
            </p>
            )
        })}
        </div>
    )
}
export default Sample;