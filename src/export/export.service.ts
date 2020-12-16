import { Injectable } from '@nestjs/common';
const ExcelJS = require('exceljs');
const path = require("path")
var fs = require('fs');
const tmp = require("tmp")

@Injectable()
export class ExportService {
    private workbook:any;
    public constructor(){
        this.workbook = new ExcelJS.Workbook();
    }

    public async createXlsxStream(sheetName:string,columns:object[],data:object[]){
        const fileName = '2020-12-16.xlsx'
        const tmpobj = tmp.dirSync();
        const tmpDir = path.dirname(tmpobj.name)
        const filePath = path.resolve(tmpDir,fileName)
        const fileExist = fs.existsSync(filePath)
        if(fileExist){
            console.log('test')
            fs.unlinkSync(filePath)
        }

        const sheet = this.workbook.addWorksheet(sheetName)
        sheet.columns = columns
        sheet.addRows(data)
        
        
        console.log('Dir: ',path.dirname(tmpobj.name));
        const tmpFile = tmp.tmpNameSync({
            name:fileName,
        })
        console.log('tmpFile',tmpFile) 
        
        var tempFilePath = tmpFile//path.resolve(__dirname,`../../public/template/${user}.xlsx`)
        console.log('download',tempFilePath)
        await this.workbook.xlsx.writeFile(tempFilePath)
        this.workbook.removeWorksheet(sheet.id)
        //const context = fs.readFileSync(tmpFile)
        //tmpFile.removeCallback()
        return /*context//*/tempFilePath
    }
}
