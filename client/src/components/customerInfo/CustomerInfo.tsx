import { DataGrid } from '@mui/x-data-grid';
import { useChurnQuery } from '../../generated/graphql';

function CustomerInfo() {

    const {data, loading, error} = useChurnQuery({fetchPolicy:"network-only"});
    const columns = [
        {
            field:"id",
            headerName:"ID",
            width: 100
        },
        {
            field:"customerID",
            headerName:"CustomerId",
            width: 200
        },
        {
            field:"gender",
            headerName:"Gender",
            width: 150
        },
        {
            field:"partner",
            headerName:"partner",
            width: 150
        },
        {
            field:"seniorCitizen",
            headerName:"seniorCitizen",
            width: 200
        },
        {
            field:"tenure",
            headerName:"Tenure",
            width: 200
        },
        {
            field:"Dependents",
            headerName:"Dependents",
            width: 200
        },
        {
            field:"PhoneService",
            headerName:"PhoneServices",
            width: 150
        },
        {
            field:"Contract",
            headerName:"Contract",
            width: 150
        },
        {
            field:"PaperlessBilling",
            headerName:"PaperlessBilling",
            width: 200
        },
        {
            field:"PaymentMethod",
            headerName:"PaymentMethod",
            width: 200
        },
        {
            field:"TotalCharges",
            headerName:"TotalCharges",
            width: 200
        },
        {
            field:"churn",
            headerName:"Churn",
            width: 200
        },
    ]

    if(!data) return <div className="workflow  p-4"><h1 className="text-center">No Data...</h1></div>
    if(error) return <div className="workflow text-center p-4"><h1 className="text-center">Error... </h1></div>
    if(loading) return <div className="workflow text-center p-4"><h1 className="text-center">Loading...</h1></div>
// eslint-disable-next-line
    return (
        <div className="workflow p-4">
            <div className="bg-white p-4 m-2">
               <h5 className="font-weight-bold text-center">Customer Info</h5>
           </div>
           <div className="p-2 bg-white m-2" >
           <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data.churn}
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

export default CustomerInfo
