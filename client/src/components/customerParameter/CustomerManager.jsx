import React, { useState } from 'react'
import Table from '../table/Table';
// import MaterialTable, { MTableToolbar } from 'material-table';
import XLSX from 'xlsx'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const EXTENSIONS = ['xlsx', 'xls', 'csv']

function CustomerManager() {
    const [colDefs, setColDefs] = useState()
    const [data, setData] = useState([]);

    const getExention = (file) => {
        const parts = file.name.split('.')
        const extension = parts[parts?.length - 1]
        return EXTENSIONS.includes(extension) // return boolean
      }
    
      const convertToJson = (headers, data) => {
        const rows = []
        data.forEach(row => {
          let rowData = {}
          row.forEach((element, index) => {
            rowData[headers[index]] = element
          })
          rows.push(rowData)
    
        });
        return rows
      }

      const importExcel = (e) => {
        const file = e.target.files[0]
    
        const reader = new FileReader()
        reader.onload = (event) => {
          //parse data
    
          const bstr = event.target.result
          const workBook = XLSX.read(bstr, { type: "binary" })
    
          //get first sheet
          const workSheetName = workBook.SheetNames[0]
          const workSheet = workBook.Sheets[workSheetName]
          //convert to array
          const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 })
          // console.log(fileData)
          const headers = fileData[0]
          const heads = headers.map(head => ({ title: head, field: head }))
          setColDefs(heads)
    
          //removing header
          fileData.splice(0, 1)
    
    
          setData(convertToJson(headers, fileData))
        }
    
        if (file) {
          if (getExention(file)) {
            reader.readAsBinaryString(file)
          }
          else {
            alert("Invalid file input, Select Excel, CSV file")
          }
        } else {
          setData([])
          setColDefs([])
        }
      }
    
    
    return (
        <div className="workflow p-4">
             <div className="bg-white p-4 m-2 d-flex justify-content-between">
               <h4 className="font-weight-bold">Customer </h4>
               <div className="" style={{cursor:"pointer"}}>
                <label style={{cursor:"pointer", backgroundColor:"#f4f4f4", padding:"5px"}}  htmlFor="file">
                    Excel <ArrowUpwardIcon/>
                </label>
                <input type="file"
                onChange={importExcel}
                 id="file" style={{display:"none"}} />
               </div>
              
           </div>
           <div className="p-2 bg-white m-2" >
                <Table
                columns={colDefs}
                rows={data}
                />
{/* 
                <MaterialTable
                    columns={colDefs}
                    data={data}        
                    /> */}
           </div>
        </div>
    )
}

export default CustomerManager
