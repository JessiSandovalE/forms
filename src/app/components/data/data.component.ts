import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray}  from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  usuario:Object = {
    nombrecompleto: {
      nombre:"Jessica",
      apellido:"Sandoval"
    },
    correo: "jessi@gmail..com",
  /*   pasatiempos:["Correr","Dormir","Comer"] */
  }
  constructor() { 

    console.log(this.usuario);
    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('',  [
          Validators.required,
          Validators.minLength(3)
        ] ),
        'apellido': new FormControl('',[ 
          Validators.required,
          this.noSandoval
        ])
      })
      ,
      'correo': new FormControl('',   [
        Validators.required, 
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),

      'pasatiempos': new FormArray([
        new FormControl('',Validators.required)
      ]),
      'pasword1': new FormControl('', Validators.required),
      'pasword2': new FormControl('', Validators.required),
    })

   /*  this.forma.setValue( this.usuario ); */
  }

  

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('',Validators.required)
    )
  }


  noSandoval( control:FormControl ):{ [s:string]:boolean }{
      if (control.value === "Sandoval"){
        return{
          noherrrera:true
        }
      }
      return null
  }

  noIgual( control:FormControl ):{ [s:string]:boolean }{
    if (control.value === this.forma.controls['password1'].value){
      return{
        noigual:true
      }
    }
    return null
}

  guardarCambios(){
    console.log(this.forma);
    this.forma.reset({
      nombrecompleto:{
        nombre:"",
        apellido:""
      },
      correo:"",
      pasatiempo:""
    })
  }

  

  ngOnInit() {
  }

}
