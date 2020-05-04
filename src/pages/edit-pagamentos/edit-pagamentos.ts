import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage({})
@Component({
  selector: 'page-edit-pagamentos',
  templateUrl: 'edit-pagamentos.html',
})


export class EditPagamentosPage {

  id: any;
  descricao: string = "";


  constructor(public navCtrl: NavController,
    public navParams: NavParams, public server: ServiceProvider,
    public toastyCrtl: ToastController,
    public alertCtrl: AlertController) {

    this.id = navParams.get("id");
    this.descricao = navParams.get("descricao");
    console.log(this.id);
  }

  editar() {

    let body = {
      id: this.id,
      descricao: this.descricao,
      crud: 'editar'
    }

    this.server.postData(body, 'FormaPagamento.php').subscribe(data => {

     this.showInsertOk();

    })
  }


  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Registro Atualizado .....',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.navCtrl.setRoot('ListPagamentosPage')
          }
        }
      ]
    });
    alert.present();
  }

}
