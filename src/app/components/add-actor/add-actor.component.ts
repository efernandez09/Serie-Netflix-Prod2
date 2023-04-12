import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Actors } from 'src/app/models/actors.inteface';
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';
import { Firestore } from '@angular/fire/firestore';
declare var $: any;

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  formulario: FormGroup;
  modalAbierto = false;

  constructor( private actorHandle: HandleActorsService, private db: Firestore ) {}

  ngOnInit(): void{
    
    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      short_description: new FormControl(),
      image: new FormControl(),
      video: new FormControl(),
      details: new FormControl({
        bornDate: '',
        nationality: '',
        long_description: '',
        hobbies: ''
      })
    })

  }

  abrirModal() {
    $('.modal').modal('show');
    
  }

  cerrarModal() {
    $('.modal').modal('hide');
  }

  // Variable para ir añadiendo Actores manualmente (Cambiar el addActor(actores) del metodo onSubmit()).
  actores: Actors = {
    id: 1,
    name: "Ursula Corberó",
    short_description: "Tokio es una de las miembros más importantes del grupo y es conocida por su habilidad con las armas y su valentía en situaciones peligrosas.",
    image: "ursula-corbero.jpeg",
    video: "UrsulayMiguel.mp4",
    details: {
    bornDate: "11/08/1989",
    nationality: "Española",
    long_description: "Úrsula Corberó es una actriz española nacida en Barcelona en 1989. Es conocida por su papel de Tokio en la exitosa serie de televisión española 'La Casa de Papel'. Corberó ha trabajado en cine y televisión desde que era joven y ha recibido varios premios por sus actuaciones, incluyendo el premio a Mejor Actriz en el Festival de Cine de Málaga. Además de su carrera actoral, Corberó ha trabajado como modelo y ha participado en campañas publicitarias para varias marcas de moda y belleza.",
    hobbies: "viajar, leer y la música.",

    }
  }

  async onSubmit() {
    // Te has quedado aqui @Eric
    // const datos = this.formulario.getRawValue();
    // console.log(datos)
    const res = await this.actorHandle.addActor(this.formulario.value)
    console.log(res)
    console.log(this.formulario.controls['name'].value)

  }
 
}
