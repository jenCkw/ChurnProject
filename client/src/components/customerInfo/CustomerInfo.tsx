import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function CustomerInfo() {
    return (
        <div className="workflow p-4">
            <div className="bg-white p-4 m-2 d-flex justify-content-between">
               <h4 className="font-weight-bold">Customer </h4>
               <div className="" style={{cursor:"pointer"}}>
                <label style={{cursor:"pointer", backgroundColor:"#f4f4f4", padding:"5px"}}  htmlFor="file">
                    Excel <ArrowUpwardIcon/>
                </label>
                <input type="file"
              
                 id="file" style={{display:"none"}} />
               </div>
              
           </div>
           <div className="p-2 bg-white m-2" >
               
           </div>
        </div>
    )
}

export default CustomerInfo
