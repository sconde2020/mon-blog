import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  start_date = new Date();

  posts = [
    {
      'titre': 'Mon premier post',
      'contenu': "Bonjour les zéros! Je suis en train d'apprendre Angular."
                  + "\nEt je compte bien aller loin!",
      'loveIts': 4,
      'created_at': this.start_date
    },
    {
      'titre' : 'Mon deuxième post',
      'contenu' : "Bonjour les zéros! Je suis en train d'apprendre Angular."
                  + "\nEt je compte bien aller loin!",
      'loveIts': 0,
      'created_at': this.start_date
    },
    {
      'titre' : 'Encore un post',
      'contenu' : "Bonjour les zéros! Je suis en train d'apprendre Angular."
                   + "\nEt je compte bien aller loin!",
      'loveIts': -4,
      'created_at': this.start_date
    }
  ];
  
}
