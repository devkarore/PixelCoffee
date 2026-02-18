import { Component, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { DecimalPipe } from '@angular/common';
import { TextLengthsPipe } from '../../pipes/text-lengths-pipe';




interface ProduitsModel{
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  created_at: Date;
}

@Component({
  selector: 'app-la-carte',
  imports: [TextLengthsPipe, DecimalPipe],
  templateUrl: './la-carte.html',
  styleUrl: './la-carte.scss',
})
export class LaCarte {
  ListeProduits = signal<ProduitsModel[]>([]);

  constructor(private monApiService: ApiService) {}

  ngOnInit(): void {
    this.monApiService.getProduits().subscribe({
      next: (response) => {
        console.log(response);
        
        this.ListeProduits.set(JSON.parse(response));
      }
    });
  }


}
