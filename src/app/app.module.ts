import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})

export class AppModule {}
