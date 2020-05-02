import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarServicosPage } from './listar-servicos';

@NgModule({
  declarations: [
    ListarServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarServicosPage),
  ],
})
export class ListarServicosPageModule {}
