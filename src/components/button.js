import React from 'react';
import ExcelJS from 'exceljs';
// import saveAs from 'file-saver'; // Import saveAs for downloading the file

const ExcelButton = () => {
  const createExcelFile = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Merge cells for a header
    worksheet.mergeCells('A1:B1');
    worksheet.getCell('A1').value = 'Name and Age';

    // Write data to merged cells
    worksheet.getCell('A2').value = 'John';
    worksheet.getCell('B2').value = 30;

    worksheet.getCell('A3').value = 'Jane';
    worksheet.getCell('B3').value = 25;

    // Save the workbook to a file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Use the FileSaver library to trigger the download
    saveAs(blob, 'example.xlsx');
  };

  return (
    <div>
      <button onClick={createExcelFile}>Generate Excel File</button>
    </div>
  );
};

export default ExcelButton;
