import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';

import { ArticleModel } from '../../models/article-model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header  implements OnInit {

  monArticle = signal<ArticleModel | null>(null);
  constructor(private monApiService: ApiService) {}

  ngOnInit(): void {
    this.monApiService.getArticle(1).subscribe({
        next: (response) => {
          this.monArticle.set(JSON.parse(response));
        }
      }
    );
  }

}
