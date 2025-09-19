import { Injectable } from "@angular/core";
import { CountryExcelProcessor } from "./country-excel-processor.service";
import { SheetMeta } from "../contracts";
import { CountryDataModel } from "../models";


@Injectable({ providedIn: 'root' })

export class ExcelConverterService {
  constructor(private countryProcessor: CountryExcelProcessor) { }

  exportCountries(meta: SheetMeta, countries: CountryDataModel[]) {
    this.countryProcessor.setupSchema(meta);
    this.countryProcessor.convert(countries);
    this.countryProcessor.download();
  }
}
