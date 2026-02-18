import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';

import { ArticleModel } from '../../models/article-model';

@Component({
  selector: 'app-apropos',
  imports: [],
  templateUrl: './apropos.html',
  styleUrl: './apropos.scss',
})
export class APropos implements OnInit {

  monArticle = signal<ArticleModel | null>(null);
  constructor(private monApiService: ApiService) {}

  ngOnInit(): void {
    this.monApiService.getArticle(2).subscribe({
        next: (response) => {
          console.log(response);
          
          this.monArticle.set(JSON.parse(response));
        }
      }
    );
  }

}
