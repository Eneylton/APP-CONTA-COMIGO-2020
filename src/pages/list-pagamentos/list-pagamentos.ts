import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';



@IonicPage({})
@Component({
  selector: 'page-list-pagamentos',
  templateUrl: 'list-pagamentos.html',
})
export class ListPagamentosPage {

  pagamentos: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServiceProvider,
              public toastyCrtl: ToastController,
              public alertCtrl: AlertController) {

    this.pagamentos = [];

  }

  ionViewDidLoad() {

    this.ListarPamentos();

  }

  openCadPagamento() {

    this.navCtrl.push('CadPagamentosPage');

  }

  openEditPagamento(id, descricao) {

    this.navCtrl.push('EditPagamentosPage', {
                                        id: id,
                                        descricao: descricao
    })

  }


  ListarPamentos() {

    let body = {
      crud: 'listar_pagamentos'
    }

    this.server.postData(body, 'FormaPagamento.php').subscribe(data => {

      for (let i = 0; i < data.result.length; i++) {

        this.pagamentos.push({
          id: data.result[i]["id"],
          descricao: data.result[i]["descricao"]
        })
      }

      console.log(this.pagamentos);

    })


  }

openDelete(id){

  let body = {
    id:id,
    crud:'deletar'
  }

  this.server.postData(body,'FormaPagamento.php').subscribe(data =>{

    this.showInsertOk();
  })

}

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Registro Excluido .....',
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
