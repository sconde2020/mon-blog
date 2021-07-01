export class Post {

    private static counter = 0;

    id !: number;
    titre !: string;
    contenu !: string;
    loveIts !: number;
    createdAt !: Date;

    constructor() { 
        this.id = Post.counter++;
        this.contenu = "Bonjour les zéros! Je suis en train d'apprendre Angular."
        + "\nEt je compte bien aller loin!";
        this.loveIts = 0;
        this.createdAt = new Date();
    }
}