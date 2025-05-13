import * as XLSX from "xlsx";

export const excelDownload = (jsonData) => {
  // Create a worksheet from the JSON data
  const ws = XLSX.utils.json_to_sheet(jsonData);

  // Create a workbook with the worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Generate Excel file and trigger download
  XLSX.writeFile(wb, "data.xlsx");
};
