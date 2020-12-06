import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IPersonalInfomation, IAddress, EnumMaritalStatus, Enumeducation, EnumSource } from '../dto/personalInfomation.dto';

@Schema()
export class PersonalInfomation extends Document implements IPersonalInfomation {
  @Prop()
  accountId?: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  gender: 'MALE' | 'FEMAL';

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  birthday: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  weight: number;

  /**
   * 是否是会员
   */
  @Prop({ required: true })
  member: boolean;

  @Prop({ required: true })
  idcard: string;

  /**
   * 户籍地址
   */
  @Prop()
  permanentAddress: IAddress;

  /**
   * 职业
   */
  @Prop({ required: true })
  occupation: string;

  /**
   * 工作区域
   */
  @Prop({ required: true })
  workAddress: IAddress;

  /**
   * 婚姻状况
   */
  @Prop({ required: true })
  maritalStatus: EnumMaritalStatus;

  /**
   * 家庭成员
   */
  @Prop()
  familyMember: string;
  
  /**
   * 学历
   */
  @Prop({ required: true })
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
  @Prop({ required: true })
  hasCar:boolean

  /**
   * 年收入
   */
  @Prop({ required: true })
  income:number
  
  /**
   * 有无房产
   */
  @Prop({ required: true })
  hasHouseProperty:boolean

  /**
   * 客户来源、渠道
   */
  @Prop({ required: true })
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
  @Prop({ required: true })
  images:string[]
}

export const PersonalInfomationSchema = SchemaFactory.createForClass(
  PersonalInfomation,
);
