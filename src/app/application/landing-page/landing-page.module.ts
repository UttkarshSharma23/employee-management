import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './landing-page.routes';
import { components } from './declarations';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [...components]
})
export class LandingPageModule {}
