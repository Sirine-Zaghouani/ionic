import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationUserMessage={
    email:[
      {type:"required", message:"Veuillez entrer votre email"},
      {type:"pattern", message:"L'email saisi est incorrect. essayer à nouveau"}
    ],
    password:[
      {type:"required", message:"Veuillez entrer votre mot de passe"},
      {type:"minlength", message:"Le mot de passe doit contenir au moins 5 caractères ou plus"}
    ],
    name:[
      {type:"required", message:"Veuillez entrer votre Nom et Prénom"},
      {type:"minlength", message:"Le nom et prénom doit contenir au moins 4 caractères ou plus"}
    ],
    phone:[
      {type:"required", message:"Veuillez entrer votre numéro de téléphone"},
      {type:"pattern", message:"Le numéro de téléphone doit contenir 8 chiffres"}
    ]
  }

  validationFormUser: FormGroup;
  constructor(public formbuilder: FormBuilder,private userService: UserService, private router: Router) {
    this.validationFormUser = new FormGroup({
      // initialisez vos champs ici si nécessaire
  });
   }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
      name: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
      ])),
      phone: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{8}$')  // Exemple pour un numéro de téléphone à 8 chiffres

      ]))

    })
  }
/*
  Signup(valid:any){
    console.log("signup")
  }
*/
  
  user: User = {
    email: '',
    password: '',
    name:'',
    phone:''
  };
  registrationMessage: string = ''; 

  Signup(valid:any) {
    this.userService.register(this.user).subscribe(
      (response) => {
        this.registrationMessage = 'Inscription réussie !';
        this.router.navigateByUrl('/signin');
        console.log('Inscription réussie', response);
        // Ajoute ici tout code supplémentaire que tu souhaites exécuter après l'inscription
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
        // Ajoute ici la gestion des erreurs si nécessaire
      }
    );
  }

}
