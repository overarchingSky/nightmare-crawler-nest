import { Injectable } from '@nestjs/common';
const ExcelJS = require('exceljs');
const path = require("path")

@Injectable()
export class ExportService {
    private workbook:any;
    public constructor(){
        this.workbook = new ExcelJS.Workbook();
    }

    public async createXlsxStream(sheetName:string,columns:object[],data:object[]){
        const sheet = this.workbook.addWorksheet(sheetName)
        sheet.columns = columns
        sheet.addRows(data)
        const user = 'template'
        var tempFilePath = path.resolve(__dirname,`../../public/template/${user}.xlsx`)
        console.log('download',tempFilePath)
        await this.workbook.xlsx.writeFile(tempFilePath)
        return tempFilePath
    }
}
