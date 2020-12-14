import { Controller, Get } from '@nestjs/common';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { ExportService } from './export.service';
// import dayjs from 'dayjs'
const dayjs = require('dayjs')

@Controller('export')
export class ExportController {
    constructor(private readonly exportService:ExportService,private readonly personalInformationService: PersonalInfomationService){}
    @Get('user')
    async exportUser(){
        const start = new Date()
        const end = Date.now()
        const users = await (await this.personalInformationService.find()).map(user => {
            
            return {
                ...user.toJSON(),
                gender: user.gender === 'MALE' ? '男' : '女',
                birthday: dayjs(user.birthday).format('YYYY-MM-DD'),
                member: user.member === true ? '是' : '否',
                permanentAddress: user.permanentAddress,
                workAddress:user.workAddress,
                hasCar: user.hasCar === true ? '有' : '无'




            }
        })
        //@ts-ignore
        console.log('users',users[0].toJSON)
        //@ts-ignore
        // const columns = Object.keys(users[0]).map(key => {
        //     return {
        //         header:key,
        //         key:key,
        //         width:50
        //     }
        // })
        const columns = [
            {
                header:'姓名',
                key:'name',
                width:7
            },
            {
                header:'性别',
                key:'gender',
                width:5
            },
            {
                header:'电话',
                key:'phone',
                width:12
            },
            {
                header:'生日',
                key:'birthday',
                width:12
            },
            {
                header:'身高',
                key:'height',
                width:5
            },
            {
                header:'体重',
                key:'weight',
                width:5
            },
            {
                header:'是否是会员',
                key:'member',
                width:10
            },
            {
                header:'身份证号',
                key:'idcard',
                width:20
            },
            {
                header:'户籍地址',
                key:'permanentAddress',
                width:10
            },
            {
                header:'职业',
                key:'occupation',
                width:14
            },
            {
                header:'工作地址',
                key:'workAddress',
                width:10
            },
            {
                header:'婚姻状况',
                key:'maritalStatus',
                width:10
            },
            {
                header:'家庭成员',
                key:'familyMember',
                width:10
            },
            {
                header:'学历',
                key:'education',
                width:10
            },
            {
                header:'学历证号',
                key:'educationCertificateNumber',
                width:10
            },
            {
                header:'毕业学校',
                key:'school',
                width:10
            },
            {
                header:'汽车',
                key:'hasCar',
                width:5
            },
            {
                header:'收入',
                key:'income',
                width:10
            },
            {
                header:'房产',
                key:'hasHouseProperty',
                width:5
            },
            {
                header:'来源',
                key:'source',
                width:10
            },
            {
                header:'个人简介',
                key:'introduction',
                width:10
            },
            {
                header:'对异性的期望',
                key:'expect',
                width:10
            },
            {
                header:'个人近照',
                key:'images',
                width:10
            }
        ]
        console.log('columns',columns)
        return this.exportService.createXlsxStream('user', columns, users)
    }
}
