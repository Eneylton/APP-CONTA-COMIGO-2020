import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPagamentosPage } from './list-pagamentos';

@NgModule({
  declarations: [
    ListPagamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPagamentosPage),
  ],
})
export class ListPagamentosPageModule {}
