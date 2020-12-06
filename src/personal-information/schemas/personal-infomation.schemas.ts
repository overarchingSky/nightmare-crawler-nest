import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IPersonalInfomation, IAddress, EnumMaritalStatus, Enumeducation, EnumSource } from '../dto/personalInfomation.dto';

@Schema()
export class PersonalInfomation extends Document implements IPersonalInfomation {

  @Prop({ required: false})
  name: string;

  @Prop()
  gender: 'MALE' | 'FEMAL';

  @Prop({ required: false})
  phone: number;

  @Prop({ required: false})
  birthday: number;

  @Prop({ required: false})
  height: number;

  @Prop({ required: false})
  weight: number;

  /**
   * 是否是会员
   */
  @Prop({ required: false})
  member: boolean;

  @Prop({ required: false})
  idcard: string;

  /**
   * 户籍地址
   */
  @Prop()
  permanentAddress: IAddress;

  /**
   * 职业
   */
  @Prop({ required: false})
  occupation: string;

  /**
   * 工作区域
   */
  @Prop({ required: false})
  workAddress: IAddress;

  /**
   * 婚姻状况
   */
  @Prop({ required: false})
  maritalStatus: EnumMaritalStatus;

  /**
   * 家庭成员
   */
  @Prop()
  familyMember: string;
  
  /**
   * 学历
   */
  @Prop({ required: false})
  education: Enumeducation;
  
  /**
   * 学历证号
   */
  @Prop()
  educationCertificateNumber:string

  /**
   * 毕业学校
   */
  @Prop()
  school:string

  /**
   * 是否拥有汽车
   */
  @Prop({ required: false})
  hasCar:boolean

  /**
   * 年收入
   */
  @Prop({ required: false})
  income:number
  
  /**
   * 有无房产
   */
  @Prop({ required: false})
  hasHouseProperty:boolean

  /**
   * 客户来源、渠道
   */
  @Prop({ required: false})
  source:EnumSource

  /**
   * 个人简介
   */
  @Prop()
  introduction:string

  /**
   * 对另一半的期望
   */
  @Prop()
  expect:string

  /**
   * 本人照片
   */
  @Prop({ required: false})
  images:string[]
}

export const PersonalInfomationSchema = SchemaFactory.createForClass(
  PersonalInfomation,
);
