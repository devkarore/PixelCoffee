import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private baseUrl: string = "http://localhost:8080/";

  constructor(private monHttpClient: HttpClient) {}


  getProduits () {
    return this.monHttpClient.get(`${this.baseUrl}products.php`, {
      responseType: 'text'
    })
  }

  
  postFormContact(formData: FormData) {
    return this.monHttpClient.post(`${this.baseUrl}contact.php`, formData, {
      responseType: 'text'
    });
  }


   getArticle(id: number) {
    return this.monHttpClient.get(`${this.baseUrl}article.php?id=${id}`, {
      responseType: 'text'
    });
  }


  getReviews(id: number) {
    return this.monHttpClient.get(`${this.baseUrl}reviews.php`, {
      responseType: 'text'
    });
  }

  
 
}

