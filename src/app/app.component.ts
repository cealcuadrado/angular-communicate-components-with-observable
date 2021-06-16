import { MessageService } from './services/message.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: any[] = [];
  subscription: Subscription;

  constructor(
    private messageService: MessageService
  ) {
    this.subscription = this.messageService.onMessage().subscribe(
      message => {
        if (message) {
          this.messages.push(message);
        } else {
          this.messages = [];
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
