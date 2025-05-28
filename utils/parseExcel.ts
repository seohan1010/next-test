// utils/parseExcel.ts
import * as XLSX from 'xlsx';

export function parseExcel(file: ArrayBuffer): string[][] {
  const workbook = XLSX.read(file, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
}
