import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn:'root'})

export class chatbotService{
  constructor (private _http : HttpClient){}

  getBotreply(userMessage : string) : Observable<string>{

     // For now, mock response
      return of("🤖 JARVIS: You said : " + userMessage);
  }
}
