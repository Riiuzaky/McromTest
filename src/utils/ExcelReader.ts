import * as XLSX from 'xlsx';
import * as fs from 'fs';

export class ExcelReader {
  static readExcel(filePath: string, sheetName: string): Record<string, string>[] {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) return [];

    // Convierte la hoja a un array de objetos
    return XLSX.utils.sheet_to_json(sheet, { defval: '' });
  }

  static getCellValue(filePath: string, sheetName: string, rowIndex: number, columnHeader: string): string {
    const data = this.readExcel(filePath, sheetName);

    if (rowIndex < 0 || rowIndex >= data.length) {
      throw new Error('Row index out of range');
    }

    const row = data[rowIndex];
    const value = row[columnHeader];

    if (value !== undefined) {
      return String(value);
    } else {
      throw new Error(`Column '${columnHeader}' not found.`);
    }
  }

  static writeExcel(filePath: string, sheetName: string, rowIndex: number, columnHeader: string, value: string): void {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) throw new Error(`Sheet '${sheetName}' not found.`);

    const data = XLSX.utils.sheet_to_json<Record<string, any>>(sheet, { defval: '' });

    // Asegura que haya suficientes filas
    while (data.length <= rowIndex) {
      data.push({});
    }

    data[rowIndex][columnHeader] = value;

    const newSheet = XLSX.utils.json_to_sheet(data, { skipHeader: false });
    workbook.Sheets[sheetName] = newSheet;
    XLSX.writeFile(workbook, filePath);
  }
}
