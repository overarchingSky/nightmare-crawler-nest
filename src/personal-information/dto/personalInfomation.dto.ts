export interface IAddress {
    province:number
    city:number
    area:number
}

export enum EnumMaritalStatus{
    /**
     * 未婚
     * 
     */
    UNMARRIED,
    /**
     * 短婚未育
     */
    MARRIAGEDNOBIRTH,
    /**
     * 有男孩
     */
    MARRIAGEDWITHBOY,
    /**
     * 有女孩
     */
    MARRIAGEDWITHGIRL,
    /**
     * 丧偶
     */
    WIDOWED
}

export enum Enumeducation{
    /**
     * 高中
     */
    HIGHSCHOOLDEGREE,
    /**
     * 大专
     */
    COLLEGEDEGREE,
    /**
     * 本科
     */
    BACHELORDEGREE,
    /**
     * 硕士
     */
    MASTERDEGREE,
    /**
     * 博士
     */
    DOCTORDEGREE
}

export enum EnumSource{
    /**
     * 朋友介绍
     */
    FRIEND,
    /**
     * 知乎
     */
    ZHIHU,
    /**
     * 豆瓣
     */
    DOUBAN,
    /**
     * 小红书
     */
    XIAOHONGSHU,
    /**
     * 抖音
     */
    DOUYIN,
    /**
     * 今日头条
     */
    JINRITOUTIAO,
    /**
     * 微视频
     */
    WEISHIPIN
}

export interface IPersonalInfomation {
    accountId?:string
    name?:string
    gender?:'MALE' | 'FEMAL'
    phone?:number
    birthday?:number
    height?:number
    weight?:number
    member?:boolean
    idcard?:string
    permanentAddress?:IAddress
    occupation?:string
    workAddress?:IAddress
    maritalStatus?:EnumMaritalStatus
    familyMember?:string
    education?:Enumeducation
    educationCertificateNumber?:string
    school?:string
    hasCar?:boolean
    income?:number
    hasHouseProperty?:boolean
    source?:EnumSource
    introduction?:string
    expect?:string
    images?:string[]
}