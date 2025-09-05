import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { PagesModule } from "./pages";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})

export class AppModule {}
