import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  // Declaraciones para los metodos referentes a las imagenes.
  imageName: string = '';
  imageDownloadUrl: string = 'path';

  // Declaracion para los dos metodos
  idDoc : string = '';

  // Declaraciones para los metodos referentes a los videos.
  videoName: string = '';
  videoDownloadUrl: string = 'path';


  constructor( private actorHandle: HandleActorsService, private storage: Storage, private firestore: Firestore ) {}

  ngOnInit(): void{
    
    this.formulario = new FormGroup({
      id: new FormControl(this.random_id),
      name: new FormControl('', Validators.required),
      short_description: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      video: new FormControl('',Validators.required),
      bornDate: new FormControl('',Validators.required),
      nationality: new FormControl('',Validators.required),
      long_description: new FormControl('',Validators.required),
      hobbies: new FormControl('',Validators.required)
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

  // Funcion dedicada al campo de subida de videos del formulario "Añadir nuevo actor".
  uploadVideo($event: any){
    // referenciamos la imagen mediante el evento que se pasa por parametros
    const file = $event.target.files[0];
    // Referenciamos la imagen en el Storage de FireBase
    const videoRef = ref(this.storage, `videos/${file.name}`);
    // Asignamos el nombre de la imagen a una variable para posteriormente utilizarlo
    // En otra funcion.
    this.videoName = file.name;
    console.log(this.videoName)
    // Subimos la imagen al Storage pasandole la referencia (Storage + Ruta)
    // Y la imagen.
    uploadBytes(videoRef, file)
      .then(res => console.log('El video se ha subido correctamente!' + res))
      .catch((error) => console.log('No se ha podido subir el video:' + error));
  }

 // Funcion para conseguir la URL publica de la imagen en el Storage
  async getActorImage() {
    const imgRef = ref(this.storage, `images/${this.imageName}`);
    try {
      const imgDownURL = await getDownloadURL(imgRef);
      this.imageDownloadUrl = imgDownURL;
    } catch (error) {
      console.log("Error al obtener la URL de descarga de la imagen: ", error);
    }
  }

 // Funcion para conseguir la URL publica de la imagen en el Storage
 async getActorVideo() {
  const videoRef = ref(this.storage, `videos/${this.videoName}`);
  try {
    const videoDownURL = await getDownloadURL(videoRef);
    this.videoDownloadUrl = videoDownURL;
    console.log(videoDownURL)
  } catch (error) {
    console.log("Error al obtener la URL de descarga del video: ", error);
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
        .catch(error => console.log('No se ha podido vincular la imagen por el siguiente error:' + error))
    } 
    
    catch (error) {
      console.log(error)
    }
  }

  // Funcion dedicada a cambiar la URL erroanea, generada en el formulario
  // Por la URL publica del video.
  async updateVideoUrl() {
      
    try {
      const collectionRef = collection(this.firestore, 'actors');
      const docRef = doc(collectionRef, this.idDoc)
      await this.getActorVideo();
      await updateDoc(docRef, {video: this.videoDownloadUrl})
        .then(res => console.log('Video vinculado correctamente!'))
        .catch(error => console.log('No se ha podido vincular el video por el siguiente error:' + error))
    } 
    
    catch (error) {
      console.log(error)
    }
  }

  // Funcion dedicada al envio de los datos introducidos en le formulario
  // al firestore.
  async onSubmit() {
    try {
      const res = await this.actorHandle.addActor(this.formulario.value)
      .then(res => this.idDoc = res.path.split("/")[1])
      .catch(err => console.log(err));
    this.updateImageUrl();
    this.updateVideoUrl();
    } 
    
    catch (error) {
      console.log(error)
    }
  }
  



}