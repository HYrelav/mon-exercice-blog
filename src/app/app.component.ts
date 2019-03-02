import { Post } from './models/Post.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-exercice-blog';

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Maître Corbeau, sur un arbre perché, Tenait en son bec un fromage...',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'La Cigale, ayant chanté Tout l\'été, Se trouva fort dépourvue Quand la bise fut venue. ',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Rien ne sert de courir ; il faut partir à point. Le Lièvre et la Tortue en sont un témoignage.',
      loveIts: 0,
      created_at: new Date()
    },
  ];

}
