export class Post {
    public titre !: string;
    public contenu !: string;
    public loveIts !: number;
    public createdAt !: Date;

    constructor() { 
        this.createdAt = new Date();
        this.loveIts = 0;
        this.contenu = "Bonjour les zéros! Je suis en train d'apprendre Angular."
        + "\nEt je compte bien aller loin!";
    }
}