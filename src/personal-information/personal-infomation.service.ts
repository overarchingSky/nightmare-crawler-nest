import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonalInfomation } from './schemas/personal-infomation.schemas';

@Injectable()
export class PersonalInfomationService {
  constructor(
    @InjectModel(PersonalInfomation.name)
    private PersonalInfomationModel: Model<PersonalInfomation>,
  ) {}
  async create(
    PersonalInfomationDto: PersonalInfomation,
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
  async findOne(accountId: string) {
    return this.PersonalInfomationModel.findOne({ accountId }).exec();
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
}
