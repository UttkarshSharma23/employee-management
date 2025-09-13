import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { components, providers } from "./declarations";
import { RouterModule } from "@angular/router";
import { routes } from "./login.routes";

@NgModule({
  declarations : components,
  imports : [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports : [],
  providers : [providers]
})



export class LoginModule {}
