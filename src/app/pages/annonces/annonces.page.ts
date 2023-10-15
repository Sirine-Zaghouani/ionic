import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { AnnoncesService } from 'src/app/services/annonces.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {
  annonces: Annonce[]=[];

  constructor(private annoncesService: AnnoncesService) { }

  ngOnInit() {
    this.loadAnnonces();
  }
  loadAnnonces() {
    this.annoncesService.getAllAnnonce().subscribe(
      (data) => {
        this.annonces = data;
      },
      (erreur) => {
        console.error('Erreur lors de la récupération des annonces :', erreur);
      }
    );
  }

}
