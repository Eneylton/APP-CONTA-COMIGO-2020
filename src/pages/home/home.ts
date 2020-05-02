import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { LoadingController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  servicos:any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public serve: ServiceProvider, public loadingCtrl: LoadingController) {

    this.servicos = [];

  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  ionViewDidLoad() {
    this.listarServicos();
  }

  listarServicos() {
 
    let body = {
      crud:'listar_servicos'
    }

    this.serve.postData(body,'Servicos.php').subscribe(data =>{

      let loader = this.presentLoading();
      for(let serv of data.result){
        this.servicos.push({

          id:serv.id,
          nome:serv.nome,
          preco:serv.preco,
          preco_vista:serv.preco_vista,
          descricao:serv.descricao,
          data:serv.data

          
        })
        
        
        loader.dismiss();
      }
      
    })
 
  }

}
