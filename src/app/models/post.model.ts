export class Post {

    titre !: string;
    contenu !: string;
    loveIts !: number;
    createdAt !: Date;

    constructor(titre: string) { 
        this.titre = titre;
        this.contenu = "Bonjour les zéros! Je suis en train d'apprendre Angular."
        + "\nEt je compte bien aller loin!";
        this.loveIts = 0;
        this.createdAt = new Date();
    }
}