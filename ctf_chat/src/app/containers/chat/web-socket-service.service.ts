import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chat-message-dto';
@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
   webSocket!: WebSocket;
  chatMessages: ChatMessageDto[] = [];
  

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('http://localhost:8082/api/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }

  public sendMessage(chatMessageDto: ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
