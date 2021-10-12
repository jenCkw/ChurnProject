import { useDeleteUserMutation, useUsersQuery } from "../../generated/graphql"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

function User() {
    const {data, loading, error} = useUsersQuery({fetchPolicy:"network-only"}); 
    const [deleteOneUser] = useDeleteUserMutation();
    const deleteUser = (id : number) =>{
        deleteOneUser({
            variables:{
                id
            }
        })
    }

    const columns = [
        {
            field:"id",
            headerName:"ID",
            width: 200
        },
        {
            field:"name",
            headerName:"name",
            width: 200
        },
        {
            field:"email",
            headerName:"Email",
            width: 200
        },
        {
            field:"*",
            headerName:"actions",
            width: 200,
            renderCell:(params:any)=>(
                <div>
                    <Link to="#">
                        <EditIcon/>
                    </Link>
                    <DeleteIcon onClick={()=> deleteUser(params.row.id)} style={{cursor: "pointer"}} className="text-danger"/>
                </div>
            )
        },
    ]

    if(!data) return <div className="workflow">no data....</div>
    if(error) return <div className="workflow">error</div>
    if(loading) return <div className="workflow">Loading.....</div>

    return (
        <div className="workflow p-4">
           <div className="bg-white p-4 m-2 d-flex justify-content-between">
                <h4 className="font-weight-bold">Manager Users </h4>
                <div className="" style={{cursor:"pointer"}}>
                    <Link to="/adduser" className="btn bg-primary p-2 text-white" style={{borderRadius:'100px'}}>
                        <AddIcon/>
                    </Link>
                </div>
           </div>
           <div className="p-2 bg-white m-2">
           <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data?.users!}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
    </div>
           </div>
        </div>
    )
}

export default User
