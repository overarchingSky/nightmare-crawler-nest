import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPersonalInfomation } from './dto/personalInfomation.dto';
import { PersonalInfomation } from './schemas/personal-infomation.schemas';

@Injectable()
export class PersonalInfomationService {
  constructor(
    @InjectModel(PersonalInfomation.name)
    private PersonalInfomationModel: Model<PersonalInfomation>,
  ) {}
  async create(
    PersonalInfomationDto: IPersonalInfomation,
  ): Promise<PersonalInfomation | undefined> {
    const createdPersonalInfomation = new this.PersonalInfomationModel(
      PersonalInfomationDto,
    );
    return createdPersonalInfomation.save();
  }
  /**
   * 批量删除
   * @param ids
   */
  async delete(ids: string[]): Promise<any> {
    return this.PersonalInfomationModel.remove({ _id: { $in: ids } }).exec();
  }
  /**
   * 单个删除
   * @param id
   */
  async deleteById(id: string): Promise<PersonalInfomation | undefined> {
    return this.PersonalInfomationModel.findByIdAndRemove(id);
  }
  /**
   * 单个查找
   * @param id
   */
  async findById(id: string): Promise<PersonalInfomation | undefined> {
    return this.PersonalInfomationModel.findById(id);
  }
  async findOne(field:string,value: string) {
    return this.PersonalInfomationModel.findOne({ [field]:value });
  }
  /**
   * 批量查找
   * @param ids 指定查找的id集合，不传则查全部
   */
  async find(ids?: string[]): Promise<PersonalInfomation[] | undefined> {
    if (ids) {
      return this.PersonalInfomationModel.find({ accountId: { $in: ids } });
    } else {
      return this.PersonalInfomationModel.find();
    }
  }

  /**
   * 更新指定用户的
   * @param field 
   * @param value 
   * @param personalInfomation 
   */
  update(field:string,value:string,personalInfomation:IPersonalInfomation){
      return this.PersonalInfomationModel.updateOne({[field]:value},personalInfomation)
  }
}
