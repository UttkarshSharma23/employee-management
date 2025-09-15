import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class IconsService {
  private icons = {
    edit: 'bi bi-pencil-square',
    save: 'bi bi-check-lg',
    cancel: 'bi bi-x-lg',
    delete: 'bi bi-trash',
  };


  getIcon(name: keyof typeof this.icons): string {
    return this.icons[name];
  }
}

