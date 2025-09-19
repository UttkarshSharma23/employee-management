import { Injectable } from "@angular/core";
import { AbstractExcelProcessor } from "../contracts";
import { CountryDataModel } from "../models";
import * as XLSX from 'xlsx'

@Injectable()

export class CountryExcelProcessor extends AbstractExcelProcessor<CountryDataModel[]> {
  override convert(data: CountryDataModel[]): void {
    if (!this.workbook) throw new Error("Workbook not initialized");

    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(this.workbook, worksheet, 'countries');
  }

}
