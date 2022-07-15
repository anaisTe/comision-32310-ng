import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';



const COMPONENTS_MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule
];


@NgModule({
  imports: [ CommonModule ],
  exports: [ ...COMPONENTS_MATERIAL]
})
export class NgMaterialModule { }
