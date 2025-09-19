import { Component } from "@angular/core";
import { chatbotService } from "../services";

@Component({
  selector: "app-chatbot",
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent {

  isOpen = false;
  messages: { sender: 'user' | 'bot', text: string }[] = [];
  userInput = '';

  constructor(private _chatbot : chatbotService){}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    const message = this.userInput;
    this.messages.push({ sender: 'user', text: message });
    this.userInput = '';

    // Call AI / Bot Service
    this._chatbot.getBotreply(message).subscribe(reply => {
      this.messages.push({ sender: 'bot', text: reply });
    });
  }

}
