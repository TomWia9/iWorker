import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../shared/messages/message';
import { MessageItem } from '../shared/messages/messageItem';

 const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  sendToAll(message): Observable<boolean>{
   return this.http.post<boolean>('https://localhost:5001/api/messages/sendToAll', message, httpOptions);
  }

  sendToUser(message, from, to): Observable<boolean>{
    return this.http.post<boolean>(`https://localhost:5001/api/messages/sendToUser/${from}/${to}`, message);
  }

  getMessageList(userID, peroid): Observable<Message[]>{
    return this.http.get<Message[]>(`https://localhost:5001/api/messages/getMessageList/${userID}/${peroid}`);
  }

  getMessage(messageID): Observable<MessageItem>{
    return this.http.get<MessageItem>(`https://localhost:5001/api/messages/getMessage/${messageID}`);
  }
}
