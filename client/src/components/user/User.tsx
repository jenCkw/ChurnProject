import { useState } from "react";
import { useDeleteUserMutation, useUsersQuery } from "../../generated/graphql"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from "material-ui-search-bar";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import generatePDf from "../../services/reportGenerator";


function User() {
    const {data, loading, error} = useUsersQuery({fetchPolicy:"network-only"}); 
    const [rows, setRows] = useState(data?.users);
    const [searched, setSearched] = useState('');
    const [deleteOneUser] = useDeleteUserMutation();


    //makes search to users data
    const requestSearch = (searchedVal: string) => {
        const filteredRows = data?.users.filter((row) => {
          return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
      };


      const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
      };

    // delete user 
    const deleteUser = (id : number) =>{
        deleteOneUser({
            variables:{
                id
            }
        })
    }

   const columnsPdf= ["ID","NAME","EMAIL"]
   
   const usersData:any = []

   const users:any = data?.users.forEach((user)=>{
       const userData = [
           user.id,
           user.name,
           user.email
       ]

       usersData.push(userData)
   })

    // define columns
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

    console.log(users)
    console.log(usersData)
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
           <div className="bg-white p-4 m-2">
            <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
            />
           </div>
           <div className="p-2 bg-white m-2">
                <div className="m-2 justify-content-end">
                    <button onClick={()=> generatePDf(columnsPdf,usersData)} className="btn btn-secondary">
                        print {"  "}
                    <LocalPrintshopIcon style={{cursor:'pointer', float:'right'}} className=" text-primary"/>
                    </button>
               </div>
            <div style={{ height: 400, width: '100%' }} id="data">
                <DataGrid
                    rows={!rows ? data.users! : rows!}
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
