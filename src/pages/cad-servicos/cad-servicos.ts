import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage({})
@Component({
  selector: 'page-cad-servicos',
  templateUrl: 'cad-servicos.html',
})
export class CadServicosPage {

  nome: string = "";
  preco_promo: string = "";
  preco: string = "";
  descricao: string = "";
  pagamentos_id: any;

  pagamentos:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public server: ServiceProvider,
    public toastyCrtl: ToastController,
    public alertCtrl: AlertController) {
  
    }

    
  ionViewDidLoad() {
    
    this.liistarPagementos();

  }

  liistarPagementos(){

    let body = {
      crud: 'listar_pagamentos'
    }

    this.server.postData(body,'FormaPagamento.php').subscribe(data =>{

      for(let i=0 ; i < data.result.length; i++){

        this.pagamentos.push({

          id:data.result[i]["id"],
          descricao:data.result[i]["descricao"]


        })

      }

      console.log("--->", this.pagamentos);

    })

  }

  cadastrar(){
    let body ={
      nome:          this.nome,
      preco_promo:   this.preco_promo,
      preco:         this.preco,
      descricao:     this.descricao,
      pagamentos_id: this.pagamentos_id,
      foto:          'xxx-xx',
      crud: 'adicionar'
    }

    this.server.postData(body, 'Servicos.php').subscribe(data=>{


      if(data.error == false){
      this.showInsertError();
      
      }else{

        this.showInsertOk();
      }

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

          this.navCtrl.setRoot('ListarServicosPage')
        }
      }
    ]
  });
  alert.present();
}

showInsertError() {
  let alert = this.alertCtrl.create({
    title: 'Error!',
    message: 'Você só pode adicionar Dois (2) Serviços',
    enableBackdropDismiss: false,
    buttons: [
      {
        text: 'Ok',
        handler: () => {

          this.navCtrl.setRoot('ListarServicosPage')
        }
      }
    ]
  });
  alert.present();
}


}