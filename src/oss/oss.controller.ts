import {
  Controller,
  HttpException,
  Inject,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { OssService } from './oss.service';

@Controller('oss')
export class OssController {
  constructor(@Inject('OssService') readonly ossService: OssService) {}
  /**
   * 上传图片或文件到oss，并返回oss地址
   * @param file
   */
  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 },
    ]) /*FileInterceptor('file')*/,
  )
  upload(@UploadedFiles() fields) {
    /**
     * fields example:
     * {
     *  file:[
     *      File
     * ],
     *  image:[
     *      File
     * ]
     * }
     */
    let { file, image } = fields;
    file = file && file[0];
    image = image && image[0];
    let ossPath, target;
    if (file) {
      ossPath = `user/file/${file.originalname}`;
      target = file;
    } else if (image) {
      ossPath = `user/image/${image.originalname}`;
      target = image;
    } else {
      throw new HttpException('file和image字段不能都为空', 1);
    }
    return this.ossService.uploadFile(target.buffer, ossPath, target.size);
  }
}
