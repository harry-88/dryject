"use client"
import React, { useState } from "react";
import ExcelJS from "exceljs";
import Button from '@/src/components/button'

const  page: React.FC=() =>{
  const [label,setLabel] = useState("")
  const createExcelFile = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Merge cells for a header
    // worksheet.mergeCells('A1:D1');
    worksheet.getCell('A1').value = 'East Coast Turf Solutions';
    worksheet.getCell('A1').font = { bold: true,name: 'Arial', size: 14, color: { argb: '87CEEB' } }; // Red bold text
  
    worksheet.getCell('O1').value = 'Sand, Profile, Sand - Profile Blend, Esolite, Gypsum, Other';
    worksheet.getCell('O1').font = { name: 'Arial', size: 10 };

    worksheet.mergeCells('E1:F1');
    worksheet.getCell('E1').value = 'DryJect Reconcilliation';
    worksheet.getCell('E1').alignment = { horizontal: 'right' };
    worksheet.getCell('E1').alignment.wrapText = true; // Enable text
    worksheet.getCell('E1').font = { name: 'Arial',bold: true, size: 12, };

    worksheet.getCell('A2').value='2023'
    worksheet.getCell('E1').font = {name: 'Arial', bold: true, size: 12, color: { argb: '87CEEB' } };
    worksheet.getCell('H2').value='Job'
    worksheet.getCell('H2').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      left: { style: 'thin', color: { argb: '000000' } }, // Left border
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('H2').font = {name: 'Arial',}

    
    worksheet.getCell('I2').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('J2').value='1'
    worksheet.getCell('J2').font = {name: 'Arial',}
    worksheet.getCell('J2').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };

    worksheet.getCell('D3').value='March'
    worksheet.getCell('D3').font = { name: 'Arial',bold: true, size: 10, };

    worksheet.mergeCells('E3:G3');
    worksheet.getCell('E3').value='Square Feet Covered'
    worksheet.getCell('E3').font = {name:'Arial'}
    worksheet.getCell('E3').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      left: { style: 'thin', color: { argb: '000000' } }, // Left border
      // bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };
    
    worksheet.getCell('E3').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('K3').value='LLC'
    worksheet.getCell('K3').font = { name: 'Arial',bold: true, size: 10, };

    worksheet.mergeCells('E4:F4');
    worksheet.getCell('E4').value='Golf Courses'
    worksheet.getCell('E4').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('E4').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      left: { style: 'thin', color: { argb: '000000' } }, // Left border
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };

    worksheet.getCell('G4').value='Sport Field'
    worksheet.getCell('G4').border = {
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };
    worksheet.getCell('G4').font = { name: 'Arial',bold: true, size: 10, };

    worksheet.getCell('H4').value='Sq Ft  '
    worksheet.getCell('H4').font = { name: 'Arial',bold: true, size: 10, };
  
    worksheet.getCell('I4').value='Mobilization'
    worksheet.getCell('I4').font = { name: 'Arial',bold: true, size: 10, };

    worksheet.getCell('K4').value='Fee'
    worksheet.getCell('K4').font = { name: 'Arial',bold: true, size: 10, };
    
    worksheet.getCell('A5').value='Date'
    worksheet.getCell('A5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('A5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('B5').value='Invoice#'
    worksheet.getCell('B5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('B5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    worksheet.getCell('C5').value='State'
    worksheet.getCell('C5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('C5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    worksheet.getCell('D5').value='Customer'
    worksheet.getCell('D5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('D5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    worksheet.getCell('E5').value='Private'
    worksheet.getCell('E5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('E5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      left: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('F5').value='Public'
    worksheet.getCell('F5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('F5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    
    worksheet.getCell('G5').value='& Other'
    worksheet.getCell('G5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('G5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    worksheet.getCell('H5').value='Charge'
    worksheet.getCell('H5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('H5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    
    worksheet.getCell('I5').value='& Other $'
    worksheet.getCell('I5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('I5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('J5').value='Collected $'
    worksheet.getCell('J5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('J5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('K5').value='8 %'
    worksheet.getCell('K5').font = { name: 'Arial',bold: true, size: 10, color: { argb: '87CEEB' } };
    worksheet.getCell('K5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('L5').value='Job Contact '
    worksheet.getCell('L5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('L5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('M5').value='Email'
    worksheet.getCell('M5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('M5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('N5').value='Comments'
    worksheet.getCell('N5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('N5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('O5').value='Amendment'
    worksheet.getCell('O5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('O5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('P5').value='Profile tons:'
    worksheet.getCell('P5').font = { name: 'Arial',bold: true, size: 10, };
    worksheet.getCell('P5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    // Write data to merged cells

    // Save the workbook to a file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'example.xlsx';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <input className="border bg-slate-400" value={label} onChange={(e)=>createExcelFile()} />
      {/* <Button  /> */}
    </div>
  );

}

export default page;
