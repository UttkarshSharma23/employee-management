import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { components, providers } from "./declarations";
import { routes } from "./chatbot.routing";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations : components,
  imports : [CommonModule , FormsModule , RouterModule.forChild(routes)],
  exports:[],
  providers : providers
})

export class ChatbotModule {}
