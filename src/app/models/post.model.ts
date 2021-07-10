export class Post {

    titre !: string;
    contenu !: string;
    loveIts !: number;
    createdAt !: Date;

    private static defaultContenu = "Bonjour les zéros! Je suis en train d'apprendre Angular."
                                    + "\nEt je compte bien aller loin!";

     constructor(titre?: string, contenu?: string) { 
        this.titre = titre == null ? '' : titre;
        this.contenu = contenu == null ? Post.defaultContenu : contenu;
        this.loveIts = 0;
        this.createdAt = new Date();
    }


}