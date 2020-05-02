import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { LoadingController } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-listar-servicos',
  templateUrl: 'listar-servicos.html',
})
export class ListarServicosPage {

  servicos: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public server: ServiceProvider, public loadingCtrl: LoadingController) {

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

    this.listarSevicos();

  }
  listarSevicos() {

    let body = {
      crud: 'listar_servicos'
    }

    this.server.postData(body, 'Servicos.php').subscribe(data => {
      let loader = this.presentLoading();

      for (let item of data.result) {
        this.servicos.push({
          id: item.id,
          nome: item.nome,
          preco: item.preco,
          preco_vista: item.preco_vista,
          descricao: item.descricao,
          data: item.data
        })
      }

      loader.dismiss();
    })
  }

}
