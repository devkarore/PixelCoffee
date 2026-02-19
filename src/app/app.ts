import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Homepage } from "./pages/homepage/homepage";
import { AuthService } from './services/auth-service';


@Component({
  selector: 'app-root',
  imports: [Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pixelcoffee');

  constructor(private authService:AuthService){

    this.authService.fetchJwtToken().subscribe({
      next:() => {},
      error: (err) => {
        console.error('Impossible de récupérer le Jwt');
        console.log(err);
        
      }
    })
  }

}
