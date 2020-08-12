import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

// Components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PopinfoComponent } from './popinfo/popinfo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    IonicModule,
    PopinfoComponent
  ]
})
export class ComponentModule { }
