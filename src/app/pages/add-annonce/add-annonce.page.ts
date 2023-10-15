import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  
  validationAnnonceMessage={
    title:[
    {type:"required", message:"Veuillez entrer le titre de l'annonce"},
    {type:"minlength", message:"Le titre doit contenir au moins 10 caractères ou plus"}],
    description:[
      {type:"required", message:"Veuillez entrer la description de l'annonce"},
      {type:"minlength", message:"La description doit contenir au moins 30 caractères ou plus"}],
    price:[
      {type:"required", message:"Veuillez entrer le prix "},
    ],
    category:[
      {type:"required", message:"Veuillez entrer Catégorie"},
    ],
    location:[
      {type:"required", message:"Veuillez entrer la localisation "},
      {type:"minlength", message:"La localisation doit contenir au moins 10 caractères ou plus"}
    ],
    image:[{type:"required", message:"Veuillez entrer une image "},],


  }


  validationFormAnnonce: FormGroup;
  constructor(public formbuilder: FormBuilder) { 
    this.validationFormAnnonce = new FormGroup({
      // initialisez vos champs ici si nécessaire
  });
  }

  ngOnInit() {
    this.validationFormAnnonce = this.formbuilder.group({
      title: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])),
      description: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(30),
      ])),
      price: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      category: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      location: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])),
      image:new FormControl('',Validators.compose([
        Validators.required,
      ]))

    })
  }

AddAnnonce(valid:any){
  console.log("signup")
}
}
