import { NgModule } from "@angular/core";
import { components, providers } from "./declarations";
import { RouterModule } from "@angular/router";
import { routes } from "./todo.routes";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations : components,
  imports : [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [],
  providers : providers,
})

export class TodoModule {}
