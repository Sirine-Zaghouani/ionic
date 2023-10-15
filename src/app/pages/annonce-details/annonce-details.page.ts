import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {

  selectedAnnonce: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private annonceSer: AnnoncesService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        let id = p.get('id');
        console.log(id);
        this.selectedAnnonce = this.annonceSer.getById(id);
      },
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sûr de vouloir supprimer cet annonce ?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.annonceSer.delete(this.selectedAnnonce);
            this.router.navigateByUrl('/annonce');
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

}
