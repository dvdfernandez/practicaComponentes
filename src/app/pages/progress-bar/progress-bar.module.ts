import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarPageRoutingModule } from './progress-bar-routing.module';

import { ProgressBarPage } from './progress-bar.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarPageRoutingModule,
    ComponentModule
  ],
  declarations: [ProgressBarPage]
})
export class ProgressBarPageModule {}
