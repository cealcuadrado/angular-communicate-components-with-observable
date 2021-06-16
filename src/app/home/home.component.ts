import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.messageService.sendMessage('Message sent');
  }

  clearMessages(): void {
    this.messageService.clearMessages();
  }

}
