export class FileItem {
    public file: File;
    public filename: string;
    public uploadComplete: boolean;
    public progress: number;
    public url:string;

    constructor (file: File) {
        this.file = file;
        this.filename = file.name;
        this.uploadComplete = false;
        this.progress = 0;
        this.url = "";
    }
}