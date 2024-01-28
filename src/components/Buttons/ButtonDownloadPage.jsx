import React, { useState } from 'react';
import styles from './ButtonDownload.module.css';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ButtonDownloadPage = ({downloadId ,contentRef}) => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const selectItem = (item) => {
    setSelectedOption(item);
    if (item === 'PDF') {
        generatePDF();
    } else if (item === 'Excel') {
        generateExcel();
    }
  };
  
  const generatePDF =() =>{
    const content = document.getElementById(downloadId);

    if (content) {
       
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height based on aspect ratio
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('dashboard.pdf');
      });
    } else {
      console.error('Content element not found.');
    }
  }
 
  const generateExcel = () => {
   // Generate and download Excel file
   const wb = XLSX.utils.book_new();
   const ws = XLSX.utils.json_to_sheet([{ sampleData: 'example' }]);
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   XLSX.writeFile(wb, 'data.xlsx');
  };


  return (
    <div className="dropdown">
      <button className={`btn border dropdown-toggle ${styles.downloadBtn}`}type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
        Download Report
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">
        <li onClick={() => selectItem('PDF')} style={{ cursor: "pointer" }}>
          <div className="dropdown-item">
            PDF
          </div>
        </li>
        <li onClick={() => selectItem('Excel')} style={{ cursor: "pointer" }}>
          <div className="dropdown-item">
            Excel
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ButtonDownloadPage;
