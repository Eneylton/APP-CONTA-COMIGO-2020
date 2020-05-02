import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadServicosPage } from './cad-servicos';

@NgModule({
  declarations: [
    CadServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadServicosPage),
  ],
})
export class CadServicosPageModule {}
