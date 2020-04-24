import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageList } from '../shared/messagesList';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  sendToAll(message): Observable<boolean>{
   return this.http.post<boolean>('https://localhost:5001/api/messages/sendToAll', message);
  }

  sendToUser(message, userID): Observable<boolean>{
    return this.http.post<boolean>(`https://localhost:5001/api/messages/sendToUser/${userID}`, message);
  }

  getMessageList(userID): Observable<MessageList[]>{
    return this.http.get<MessageList[]>(`https://localhost:5001/api/messages/getMessageList/${userID}`);
  }

  getMessage(messageID): Observable<string>{
    return this.http.get<string>(`https://localhost:5001/api/${messageID}`);
  }
}
