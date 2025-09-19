import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { components, providers } from "./declarations";
import { RouterModule } from "@angular/router";
import { routes } from "./pages.routes";
import { CommonModule } from "@angular/common";
import { ChatbotModule } from "../chatbot";
import { ExcelConverterModule } from "../../shared/excel-converter";

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    ChatbotModule,
    ExcelConverterModule,
    RouterModule.forChild(routes)
  ],
  exports : [],
  providers: providers
})

export class PagesModule {}
