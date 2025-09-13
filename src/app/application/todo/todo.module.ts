import { NgModule } from "@angular/core";
import { components } from "./declarations";
import { RouterModule } from "@angular/router";
import { routes } from "./todo.routes";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations : components,
  imports : [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [],
  providers : [],
})

export class TodoModule {}
