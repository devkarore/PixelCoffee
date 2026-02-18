import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';

import { ArticleModel } from '../../models/article-model';



import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  
  formulaire: FormGroup;
  isFormulaireSent = signal<boolean>(false);
  monArticle = signal<ArticleModel | null>(null);


  constructor(private monApiService: ApiService, private fb: FormBuilder) {
    this.formulaire = this.fb.group({
      first_name: ['', [Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      company: ['', [Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

  }

  ngOnInit(): void {
    this.monApiService.getArticle(3).subscribe({
        next: (response) => {
          console.log(response);
          
          this.monArticle.set(JSON.parse(response));
        }
      }
    );
  }

soumettre(): void {
    if(this.formulaire.valid) {
      const formValues = new FormData();
      for(let key in this.formulaire.value) {
        formValues.append(key, this.formulaire.value[key]);
      }
      this.monApiService.postFormContact(formValues).subscribe({
        next: (response) => {
          const data = JSON.parse(response);
          if(!data.error) {
            this.isFormulaireSent.set(true);
          } else {
            console.log(data.message);
          }
        }, 
        error: (err) => {
          switch(err.status) {
            case 401: 
              console.log('Unauthorized');
              break;
            case 403: 
              console.log('Forbidden');
              break;
          }
        }
      });
    }
  }

}