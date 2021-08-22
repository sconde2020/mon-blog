export class PostData {

    title !: string;
    content !: string;

    constructor(title?: string, content?: string) {
        this.title = title == null ? '' : title;
        this.content = content == null ? '' : content;
    }
}