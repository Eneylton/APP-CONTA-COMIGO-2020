import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPagamentosPage } from './edit-pagamentos';

@NgModule({
  declarations: [
    EditPagamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPagamentosPage),
  ],
})
export class EditPagamentosPageModule {}
