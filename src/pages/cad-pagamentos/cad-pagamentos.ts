import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage({})
@Component({
  selector: 'page-cad-pagamentos',
  templateUrl: 'cad-pagamentos.html',
})
export class CadPagamentosPage {

  descricao: string = "";

  constructor(public navCtrl: NavController,
              public toastyCrtl: ToastController,
              public alertCtrl: AlertController,
              public navParams: NavParams, public serve: ServiceProvider) {
  }


  cadastrar() {

    let body = {
      descricao:this.descricao,
      crud: 'adicionar'
    }

    this.serve.postData(body, 'FormaPagamento.php').subscribe(data => {
       
      this.showInsertOk();

    })

  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Seu Cadastro efetuado com sucesso',
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
