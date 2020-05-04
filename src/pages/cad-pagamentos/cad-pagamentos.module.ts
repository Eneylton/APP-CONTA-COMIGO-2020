import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadPagamentosPage } from './cad-pagamentos';

@NgModule({
  declarations: [
    CadPagamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadPagamentosPage),
  ],
})
export class CadPagamentosPageModule {}
