import { jsPDF } from 'jspdf' 
import 'jspdf-autotable'

 const generatePDf = (columns:any, data:any) =>{
     const doc: any = new jsPDF()
      // startY is basically margin-top
    doc.autoTable(columns, data, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left'
   
    
    // we define the name of our PDF file

    doc.save(`report_${dateStr}.pdf`);
 }

export default generatePDf;