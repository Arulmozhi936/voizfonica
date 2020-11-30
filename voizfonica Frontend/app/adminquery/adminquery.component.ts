import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../ChatMessageDto';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-adminquery',
  templateUrl: './adminquery.component.html',
  styleUrls: ['./adminquery.component.css']
})
export class AdminqueryComponent implements OnInit {
  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }
  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    // console.log(sendForm.value)
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }
}