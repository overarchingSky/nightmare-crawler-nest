import {
  Controller,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { OssService } from './oss.service';

@Controller('oss')
export class OssController {
  constructor(@Inject('OssService') readonly ossService: OssService) {}
  /**
   * 上传图片到oss，并返回oss地址
   * @param file
   */
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    return this.ossService.uploadFile(
      file.buffer,
      `user/images/${file.originalname}`,
      file.size,
    );
  }
}
