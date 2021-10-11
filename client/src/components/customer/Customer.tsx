import axios from 'axios';
import {useEffect, useState} from 'react'
import Table from '../table/Table';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Customer() {

    const [customers, setCustmors] = useState([]);

    const columns = [
        {
            field:"id",
            headerName:"ID",
            width: 100
        },
        {
            field:"name",
            headerName:"Name",
            width: 200
        },
        {
            field:"gender",
            headerName:"Gender",
            width: 150
        },
        {
            field:"address",
            headerName:"Address",
            width: 200
        },
        {
            field:"phone",
            headerName:"Phone",
            width: 150
        },

    ]

    useEffect(()=>{
        axios.get('/customer/')
        .then(res => setCustmors(res.data));
    },[])

    return (
        <div className="workflow p-4 ">
           <div className="bg-white p-4 m-2 d-flex justify-content-between">
               <h4 className="font-weight-bold">Parameter </h4>
               <div className="" style={{cursor:"pointer"}}>
                <label style={{cursor:"pointer", backgroundColor:"#f4f4f4", padding:"5px"}}  htmlFor="file">
                    Excel <ArrowUpwardIcon/>
                </label>
                <input type="file" id="file" style={{display:"none"}} />
               </div>
              
           </div>
           <div className="p-2 bg-white m-2" >
               <Table
               columns={columns}
               rows={customers}
               />
           </div>
        </div>
    )
}

export default Customer