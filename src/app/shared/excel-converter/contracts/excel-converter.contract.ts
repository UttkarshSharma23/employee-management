import * as xlsx from "xlsx";

export interface IExcelProcessor<T>{
  setupSchema(meta: SheetMeta) : void;
  convert (data: T) : void;
  download() : void;
}


export abstract class AbstractExcelProcessor<T> implements IExcelProcessor<T>{
    protected workbook : xlsx.WorkBook | null = null;
    protected schema : SheetMeta | null = null;

    setupSchema(meta: SheetMeta): void {
        this.schema = meta;
        this.workbook = xlsx.utils.book_new();
    }

    abstract convert(data: T): void;

    download(): void {
        if(this.workbook && this.schema){
          xlsx.writeFile(this.workbook, `${this.schema.workbookName}.xlsx`)
        }
    }
}

export interface SheetMeta {
  workbookName : string;
}
