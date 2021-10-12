import Table from '../table/Table';
import { useCustomerQuery } from '../../generated/graphql';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

function Customer() {

   const { data, loading,error } = useCustomerQuery();

    const columns = [
        {
            field:"id",
            headerName:"ID",
            width: 100
        },
        {
            field:"firstname",
            headerName:"FirstName",
            width: 200
        },
        {
            field:"lastname",
            headerName:"Lastname",
            width: 150
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

    if(error) return <div className="workflow p-4 ">error...</div>

    if(loading) return <div className="workflow p-4 ">Loading....</div>


  
    return (
        <div className="workflow p-4 ">
           <div className="bg-white p-4 m-2 d-flex justify-content-between">
               <h4 className="text-primary font-weight-bold">Customer </h4>
               <div className="" style={{cursor:"pointer"}}>
               <Link to="#" className="btn bg-primary p-2 text-white" style={{borderRadius:'100px'}}>
                    <AddIcon/>
                </Link>
               </div>
              
           </div>
           <div className="p-2 bg-white m-2" >
               <Table
               columns={columns}
               rows={data?.customers}
               />
           </div>
        </div>
    )
}

export default Customer