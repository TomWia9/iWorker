import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageList } from '../shared/messagesList';
import { MessageItem } from '../shared/messageItem';

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

  getMessageList(userID): Observable<MessageList[]>{
    return this.http.get<MessageList[]>(`https://localhost:5001/api/messages/getMessageList/${userID}`);
  }

  getMessage(messageID): Observable<MessageItem>{
    return this.http.get<MessageItem>(`https://localhost:5001/api/messages/getMessage/${messageID}`);
  }
}
