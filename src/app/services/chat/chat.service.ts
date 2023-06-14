import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
  private apiKey = 'sk-3E7I'; // Substitua pelo seu API key

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      prompt: message,
      temperature: 0.2,
      max_tokens: 50
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }
}

 // private apiKey = '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';