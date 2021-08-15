export class Post {

    private static COUNTER = 0;

    id!: number;
    title !: string;
    content !: string;
    loveIt !: number;
    createdAt !: Date;
    updatedAt !: Date;


    private static defaultContent = "Bonjour les zéros! Je suis en train d'apprendre Angular."
                                    + "\nEt je compte bien aller loin!";

     constructor(title?: string, content?: string) { 
        this.id = Post.COUNTER++;
        this.title = title == null ? '' : title;
        this.content = content == null ? Post.defaultContent : content;
        this.loveIt = 0;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }


}