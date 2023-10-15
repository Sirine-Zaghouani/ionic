import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnnoncePageRoutingModule } from './add-annonce-routing.module';

import { AddAnnoncePage } from './add-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddAnnoncePageRoutingModule
  ],
  declarations: [AddAnnoncePage]
})
export class AddAnnoncePageModule {}
