import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { components, providers } from "./declarations";
import { Router, RouterModule } from "@angular/router";
import { routes } from "./pages.routes";

@NgModule({
  declarations: components,
  imports: [
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [],
  providers: providers
})

export class PagesModule {}
