/// <reference types="node" />
export declare class OssService {
    private client;
    constructor();
    uploadFile(localPath: string | Buffer | ReadableStream, ossPath: string, size: number): Promise<string>;
    private upload;
    private resumeUpload;
    deleteOne(filepath: string): Promise<void>;
    deleteMulti(filepathArr: string[]): Promise<void>;
    getFileSignatureUrl(filePath: string): Promise<string>;
    existObject(ossPath: string): Promise<boolean>;
}
