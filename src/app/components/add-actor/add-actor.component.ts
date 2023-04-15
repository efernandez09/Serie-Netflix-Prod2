import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';
import { Storage, ref, uploadBytes, getDownloadURL, } from '@angular/fire/storage';
import { Firestore, collection, updateDoc, doc } from '@angular/fire/firestore';
import { UrlTree } from '@angular/router';
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
  imageName: string = '';
  imageDownloadUrl: string = 'path';
  idDoc : string = '';

  constructor( private actorHandle: HandleActorsService, private storage: Storage, private firestore: Firestore ) {}

  ngOnInit(): void{
    
    this.formulario = new FormGroup({
      id: new FormControl(this.random_id),
      name: new FormControl(),
      short_description: new FormControl(),
      image: new FormControl(),
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

  // Funcion dedicada al campo de subida de imagenes del formulario "Añadir nuevo actor".
  uploadImage($event: any){
    // referenciamos la imagen mediante el evento que se pasa por parametros
    const file = $event.target.files[0];
    // Referenciamos la imagen en el Storage de FireBase
    const imgRef = ref(this.storage, `images/${file.name}`);
    // Asignamos el nombre de la imagen a una variable para posteriormente utilizarlo
    // En otra funcion.
    this.imageName = file.name;
    // Subimos la imagen al Storage pasandole la referencia (Storage + Ruta)
    // Y la imagen.
    uploadBytes(imgRef, file)
      .then(res => console.log('La imagen se ha subido correctamente!' + res))
      .catch((error) => console.log('No se ha podido subir la imagen:' + error));
  }


 // Funcion para conseguir la URL publica de la imagen en el Storage
  async getActorImage() {
    const imgRef = ref(this.storage, `images/${this.imageName}`);
    try {
      const imgDownURL = await getDownloadURL(imgRef);
      this.imageDownloadUrl = imgDownURL;
    } catch (error) {
      console.log("Error al obtener la URL de descarga: ", error);
    }
  }

    // Funcion dedicada a cambiar la URL erroanea, generada en el formulario
    // Por la URL publica de la imagen.
    async updateImageUrl() {
        
      try {
        const collectionRef = collection(this.firestore, 'actors');
        const docRef = doc(collectionRef, this.idDoc)
        await this.getActorImage();
        await updateDoc(docRef, {image: this.imageDownloadUrl})
          .then(res => console.log('imagen vinculada correctamente!'))
          .catch(error => console.log('No se ha podido vincular por el siguiente error:' + error))
      } 
      
      catch (error) {
        console.log(error)
      }
    }

    // Funcion dedicada 
    async onSubmit() {
      try {
        const res = await this.actorHandle.addActor(this.formulario.value)
        .then(res => this.idDoc = res.path.split("/")[1])
        .catch(err => console.log(err));
        this.updateImageUrl();
      } 
      
      catch (error) {
        console.log(error)
      }
    }
  



}