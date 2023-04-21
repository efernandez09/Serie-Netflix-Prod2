import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Actors } from 'src/app/models/actors.inteface';
import { HandleActorsService } from 'src/app/services/handleActors/handle-actors.service';
declare var $: any;
@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit{
  a: Actors;
  modalAbierto = false;
  editForm: FormGroup;

  // Declaraciones para los metodos referentes a las imagenes.
  imageName: string = '';
  imageDownloadUrl: string = 'path';

  // Declaraciones para los metodos referentes a los videos.
  videoName: string = '';
  videoDownloadUrl: string = 'path';

  // Declaracion para los dos metodos
  idDoc : string = '';
  idActor : string | null;
  random_id = Math.random();

  constructor(private _handleActorService: HandleActorsService, private firestore: Firestore, private storage: Storage, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.editForm = new FormGroup({
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
    
    //Recogemos id de la URl para acceder a ese actor en la base de datos
    const idActor = this.route.snapshot.paramMap.get('id');
    
    //Llamamos al método del servicio que devuelve un actor
    this._handleActorService.getOneActor(idActor).subscribe(actors => { 
      this.a = actors});
  }

  abrirModal() {
    $('.modal').modal('show');    
  }

  cerrarModal() {
    $('.modal').modal('hide');
  }

  // Funcion dedicada al campo de subida de imagenes del formulario "Editar actor".
  uploadImage($event: any){
    // referenciamos la imagen mediante el evento que se pasa por parametros
    const file = $event.target.files[0];
    // Referenciamos la imagen en el Storage de FireBase
    const imgRef = ref(this.storage, `images/${file.name}`);
    // Asignamos el nombre de la imagen a una variable para posteriormente utilizarlo
    // En otra funcion.
    this.imageName = file.name;
    // Subimos la imagen al Storage pasandole la referencia (Storage + Ruta)
    uploadBytes(imgRef, file)
      .then(res => console.log('La imagen se ha subido correctamente!' + res))
      .catch((error) => console.log('No se ha podido subir la imagen:' + error));
  }

  // Funcion dedicada al campo de subida de videos del formulario "Editar actor".
  uploadVideo($event: any){
    // referenciamos la imagen mediante el evento que se pasa por parametros
    const file = $event.target.files[0];
    // Referenciamos la imagen en el Storage de FireBase
    const videoRef = ref(this.storage, `videos/${file.name}`);
    // Asignamos el nombre de la imagen a una variable para posteriormente utilizarlo
    // En otra funcion.
    this.videoName = file.name;
    // Subimos el video al Storage pasandole la referencia (Storage + Ruta)
    uploadBytes(videoRef, file)
      .then(res => console.log('El video se ha subido correctamente!' + res))
      .catch((error) => console.log('No se ha podido subir el video:' + error));
  }

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
    } catch (error) {
      console.log("Error al obtener la URL de descarga del video: ", error);
    }
  }

  // Funcion dedicada a cambiar la URL erroanea, generada en el formulario por la URL publica de la imagen
  async updateImageUrl() {
    try {
      const collectionRef = collection(this.firestore, 'actors');
      const docRef = doc(collectionRef, this.idDoc);
      await this.getActorImage();
      await updateDoc(docRef, {image: this.imageDownloadUrl})
        .then(res => console.log('imagen vinculada correctamente!'))
        .catch(error => console.log('No se ha podido vincular la imagen por el siguiente error:' + error))
    } 
    catch (error) {
      console.log(error)
    }
  }

  // Funcion dedicada a cambiar la URL erroanea, generada en el formulario por la URL publica del video.
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

  async onSubmit(actor: Actors) {
    try {
      this.idActor = this.route.snapshot.paramMap.get('id')
      const res = await this._handleActorService.updateActor(this.idActor!, this.a);
      if(this.idActor != null){
        this.idDoc = this.idActor;
      }else{
        this.idDoc= " ";
      }
      this.updateImageUrl();
      this.updateVideoUrl();
    } 
    catch (error) {
      console.log(error)
    }
  }
}



