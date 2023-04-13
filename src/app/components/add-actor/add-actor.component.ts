import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Actors } from 'src/app/models/actors.inteface';
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/storage';
declare var $: any;

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {

  formulario: FormGroup;
  modalAbierto = false;
  random_id = Math.random();
  url : string;

  constructor( private actorHandle: HandleActorsService, private storage: Firestore ) {}

  ngOnInit(): void{
    
    this.formulario = new FormGroup({
      id: new FormControl(this.random_id),
      name: new FormControl(),
      short_description: new FormControl(),
      image: new FormControl([]),
      video: new FormControl(),
      bornDate: new FormControl(),
      nationality: new FormControl(),
      long_description: new FormControl(),
      hobbies: new FormControl()
    })

  }

  abrirModal() {
    $('.modal').modal('show');
    
  }

  cerrarModal() {
    $('.modal').modal('hide');
  }

  // subirImagen() {
  //   const archivo = this.formulario.controls['image'].value;
  //   const ruta = `imagenes/${archivo.name}`;
  //   const referencia = firebase.storage().ref(ruta);
  //   referencia.put(archivo).then(() => {
  //     referencia.getDownloadURL().then((url: any) => {
  //       this.url = url;
  //       this.firestore.collection('imagenes').add({ url: this.url });
  //     });
  //   });
  // }

  // Variable para ir añadiendo Actores manualmente (Cambiar el addActor(actores) del metodo onSubmit()).
  // actores: Actors = {
  //   id: 1,
  //   name: "Ursula Corberó",
  //   short_description: "Tokio es una de las miembros más importantes del grupo y es conocida por su habilidad con las armas y su valentía en situaciones peligrosas.",
  //   image: "ursula-corbero.jpeg",
  //   video: "UrsulayMiguel.mp4",
  //   bornDate: "11/08/1989",
  //   nationality: "Española",
  //   long_description: "Úrsula Corberó es una actriz española nacida en Barcelona en 1989. Es conocida por su papel de Tokio en la exitosa serie de televisión española 'La Casa de Papel'. Corberó ha trabajado en cine y televisión desde que era joven y ha recibido varios premios por sus actuaciones, incluyendo el premio a Mejor Actriz en el Festival de Cine de Málaga. Además de su carrera actoral, Corberó ha trabajado como modelo y ha participado en campañas publicitarias para varias marcas de moda y belleza.",
  //   hobbies: "viajar, leer y la música.",
  // }

  async onSubmit() {
    
    const res = await this.actorHandle.addActor(this.formulario.value)
    console.log(res)

  }
 
}