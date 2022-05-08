import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import {MatSliderModule} from "@angular/material/slider";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
