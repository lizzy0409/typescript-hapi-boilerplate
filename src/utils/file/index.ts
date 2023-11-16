class FileUtil {
    static getFileTypeFromContentType = (contentType: string) => {
        return contentType.split('/')[1]
    }
}

export default FileUtil