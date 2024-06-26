'use client'
import React, { useEffect, useState } from "react";
import ExcelJS from "exceljs";
import Button from '@/src/components/button'
import axios from "axios";

const page: React.FC = () => {

  useEffect(() => {
    // createExcelFile()
    // getData()
  }, [])

  const getData = async () => {
    try {

      axios.get('http://localhost:9000/franchiseeJob/haris/month/jan').then(response => {

        response = response.data;
        createExcelFile(response)
      })

    } catch (error) {
      console.log("error is ", error)
    }
  }
  const createExcelFile = async (data) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Merge cells for a header
    // worksheet.mergeCells('A1:D1');

    // Excel header start
    worksheet.getColumn(2).width = 15;
    worksheet.getColumn(4).width = 25;
    worksheet.getColumn(5).width = 16;
    worksheet.getColumn(6).width = 15;
    worksheet.getColumn(6).width = 15;
    worksheet.getColumn(7).width = 12;
    worksheet.getColumn(10).width = 16;
    worksheet.getColumn(11).width = 14;
    worksheet.getColumn(12).width = 18;
    worksheet.getColumn(13).width = 20;
    worksheet.getColumn(14).width = 20;
    worksheet.getColumn(15).width = 20;
    worksheet.getColumn(16).width = 18;

    worksheet.getCell('A1').value = 'East Coast Turf Solutions';
    worksheet.getCell('A1').font = { bold: true, name: 'Arial', size: 14, color: { argb: '2B9161' } }; // Red bold text
    worksheet.getCell('O1').value = 'Sand, Profile, Sand - Profile Blend, Esolite, Gypsum, Other';
    worksheet.getCell('O1').font = { name: 'Arial', size: 10 };
    worksheet.mergeCells('E1:F1');
    worksheet.getCell('E1').value = 'DryJect Reconcilliation';
    worksheet.getCell('E1').alignment = { horizontal: 'right' };
    worksheet.getCell('E1').alignment.wrapText = true; // Enable text
    worksheet.getCell('E1').font = { name: 'Arial', bold: true, size: 12, };
    worksheet.getCell('A2').value = '2023'
    worksheet.getCell('E1').font = { name: 'Arial', bold: true, size: 12, color: { argb: '2B9161' } };
    worksheet.getCell('H2').value = 'Job'
    worksheet.getCell('H2').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      left: { style: 'thin', color: { argb: '000000' } }, // Left border
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('H2').font = { name: 'Arial', }
    worksheet.getCell('I2').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('J2').value = '1'
    worksheet.getCell('J2').font = { name: 'Arial', }
    worksheet.getCell('J2').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };
    worksheet.getCell('D3').value = 'March'
    worksheet.getCell('D3').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.mergeCells('E3:G3');
    worksheet.getCell('E3').value = 'Square Feet Covered'
    worksheet.getCell('E3').font = { name: 'Arial' }
    worksheet.getCell('E3').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      left: { style: 'thin', color: { argb: '000000' } }, // Left border
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };
    worksheet.getCell('E3').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('K3').value = 'LLC'
    worksheet.getCell('K3').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.mergeCells('E4:F4');
    worksheet.getCell('E4').value = 'Golf Courses'
    worksheet.getCell('E4').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('E4').border = {
      top: { style: 'thin', color: { argb: '000000' } }, // Top border
      left: { style: 'thin', color: { argb: '000000' } }, // Left border
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };
    worksheet.getCell('G4').value = 'Sport Field'
    worksheet.getCell('G4').border = {
      right: { style: 'thin', color: { argb: '000000' } }, // Right border
    };
    worksheet.getCell('G4').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('H4').value = 'Sq Ft  '
    worksheet.getCell('H4').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('I4').value = 'Mobilization'
    worksheet.getCell('I4').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('K4').value = 'Fee'
    worksheet.getCell('K4').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('A5').value = 'Date'
    worksheet.getCell('A5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('A5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('B5').value = 'Invoice#'
    worksheet.getCell('B5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('B5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('C5').value = 'State'
    worksheet.getCell('C5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('C5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('D5').value = 'Customer'
    worksheet.getCell('D5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('D5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('E5').value = 'Private'
    worksheet.getCell('E5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('E5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      left: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('F5').value = 'Public'
    worksheet.getCell('F5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('F5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('G5').value = '& Other'
    worksheet.getCell('G5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('G5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
      right: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('H5').value = 'Charge'
    worksheet.getCell('H5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('H5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('I5').value = '& Other $'
    worksheet.getCell('I5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('I5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('J5').value = 'Collected $'
    worksheet.getCell('J5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('J5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('K5').value = '8 %'
    worksheet.getCell('K5').font = { name: 'Arial', bold: true, size: 10, color: { argb: '2B9161' } };
    worksheet.getCell('K5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('L5').value = 'Job Contact '
    worksheet.getCell('L5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('L5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('M5').value = 'Email'
    worksheet.getCell('M5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('M5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('N5').value = 'Comments'
    worksheet.getCell('N5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('N5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('O5').value = 'Amendment'
    worksheet.getCell('O5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('O5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };
    worksheet.getCell('P5').value = 'Profile tons:'
    worksheet.getCell('P5').font = { name: 'Arial', bold: true, size: 10, };
    worksheet.getCell('P5').border = {
      bottom: { style: 'thin', color: { argb: '000000' } }, // Bottom border
    };

    // Excel header end


    for (let i = 6; i < 29; i++) {
      worksheet.getCell('A' + i).value = data?.data[i - 6]?.date || "";
      worksheet.getCell('A' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('B' + i).value = data?.data[i - 6]?.invoice || "";
      worksheet.getCell('B' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('C' + i).value = data?.data[i - 6]?.state || ''
      worksheet.getCell('C' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('D' + i).value = data?.data[i - 6]?.customer || ""
      worksheet.getCell('D' + i).font = { name: 'Arial', size: 10, };

      // cellB1.type = ExcelJS.ValueType.Number; // Set the data type to 'number'



      if (data?.data[i - 6]?.private) {
        worksheet.getCell('E' + i).value = parseFloat(data.data[i - 6]?.private)
        worksheet.getCell('E' + i).font = { name: 'Arial', size: 10, };
      }
      // worksheet.getCell('E' + i).type = ExcelJS.ValueType.Number; 
      if (data?.data[i - 6]?.public) {
        worksheet.getCell('F' + i).value = data.data[i - 6]?.public || ""
        worksheet.getCell('F' + i).font = { name: 'Arial', size: 10, };
      }
      // worksheet.getCell('F' + i).type = ExcelJS.ValueType.Number;

      if (data?.data[i - 6]?.suportField) {
        worksheet.getCell('G' + i).value = data.data[i - 6]?.suportField || ""
        worksheet.getCell('G' + i).font = { name: 'Arial', size: 10, };
      }

      if (data?.data[i - 6]?.sqFtCharges) {
        worksheet.getCell('H' + i).value = data.data[i - 6]?.sqFtCharges || ""
        worksheet.getCell('H' + i).font = { name: 'Arial', size: 10, };
      }

      if (data?.data[i - 6]?.mobilization) {
        worksheet.getCell('I' + i).value = data.data[i - 6]?.mobilization || ""
        worksheet.getCell('I' + i).font = { name: 'Arial', size: 10, };
      }


      worksheet.getCell('J' + i).value = { formula: `((E${i}+F${i}+G${i})*H${i})+I${i}`, result: data?.data[i - 6]?.collected };
      worksheet.getCell('J' + i).font = { name: 'Arial', size: 10, };
      worksheet.getCell('J' + i).numFmt = '#,##0.00_);[Red](#,##0.00); "-"';;


      // worksheet.getCell('K' + i).value = { formula: `J${i}*K$5`,additionalValue:data.data[i-6].fee };
      worksheet.getCell('K' + i).value = { formula: `J${i}*K$5`, result: data?.data[i - 6]?.fee };
      worksheet.getCell('K' + i).font = { name: 'Arial', size: 10, };
      worksheet.getCell('K' + i).numFmt = '#,##0.00_);[Red](#,##0.00); "-"';;

      worksheet.getCell('L' + i).value = ""
      worksheet.getCell('L' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('M' + i).value = ""
      worksheet.getCell('M' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('N' + i).value = ""
      worksheet.getCell('N' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('O' + i).value = ""
      worksheet.getCell('O' + i).font = { name: 'Arial', size: 10, };

      worksheet.getCell('O' + i).value = ""
      worksheet.getCell('O' + i).font = { name: 'Arial', size: 10, };

    }


    const startCell = worksheet.getCell('A30');
    const endCell = worksheet.getCell('P30');

    // Loop through each cell in the range and add a border
    for (let row = startCell.row; row <= endCell.row; row++) {
      for (let col = startCell.col; col <= endCell.col; col++) {
        const cell = worksheet.getCell(row, col);
        cell.border = {
          top: { style: 'thin', color: { argb: '000000' } },
        };
      }
    }
    // Add a border to the defined range
    // worksheet.getCell(startCell.address + ':' + endCell.address).border = {
    //   top: { style: 'thin', color: { argb: '000000' } },
    // };



    worksheet.getCell('D30').value = "Totals:"
    worksheet.getCell('D30').alignment = {horizontal:'right'}
    worksheet.getCell("D30").font = { name: 'Arial', size: 10, };

    worksheet.getCell('E30').value = { formula: `SUM(E6:E29)`, result: data.totalAmount.private };
    worksheet.getCell("E30").font = { name: 'Arial', size: 10, };
    worksheet.getCell('E30').numFmt = '#,##0.00_);[Red](#,##0.00); "-"';;

    worksheet.getCell('F30').value = { formula: `SUM(F6:F29)`, result: data.totalAmount.public };
    worksheet.getCell("F30").font = { name: 'Arial', size: 10, };
    worksheet.getCell('F30').numFmt = '#,##0.00_);[Red](#,##0.00); "-"';

    worksheet.getCell('G30').value = { formula: `SUM(G6:G29)`, result: data.totalAmount.suportField };
    worksheet.getCell("G30").font = { name: 'Arial', size: 10, };
    worksheet.getCell('G30').numFmt = '#,##0.00_);[Red](#,##0.00); "-"';


    worksheet.getCell('I30').value = { formula: `SUM(I6:I29)`, result: data.totalAmount.mobilization };
    worksheet.getCell("I30").font = { name: 'Arial', size: 10, };
    worksheet.getCell('I30').numFmt = '#,##0.00_);[Red](#,##0.00); "-"';


    worksheet.getCell('J30').value = { formula: `SUM(J6:J29)`, result: data.totalAmount.collected };
    worksheet.getCell("J30").font = { name: 'Arial', size: 10, };
    worksheet.getCell('J30').numFmt = '#,##0.00_);[Red](#,##0.00); "-"';


    worksheet.getCell('K30').value = { formula: `SUM(K6:K29)`, result: data.totalAmount.fee };
    worksheet.getCell("K30").font = { name: 'Arial', size: 10, };
    worksheet.getCell('K30').numFmt = '#,##0.00_);[Red](#,##0.00); "-"';

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
      <div className="flex justify-center py-4">

        <p className="text-[#2B9161] border-2 border-[#2B9161] p-2 rounded-lg  text-2xl " role="button" onClick={getData}>download report</p>
      </div>
    </div>
  );

}

export default page;
