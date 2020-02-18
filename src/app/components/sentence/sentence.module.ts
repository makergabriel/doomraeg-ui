import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SentenceComponent } from './sentence.component';
import { PipesModule } from '../pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SentenceComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    PipesModule
  ],
  exports: [
    SentenceComponent,
  ]
})
export class SentenceModule { }
