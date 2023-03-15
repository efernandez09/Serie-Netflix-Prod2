import { Component } from '@angular/core';

// Importamos los tipados que ya hemos creado previamente
import { Actors } from '../../models/actors.inteface'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent {

// Declaramos el array en el que almacenaremos todos los actores.
actorsArray: Actors[] = [
  {
    id: 1,
    name: 'Ursula Corberó',
    short_description: 'Tokio es una de las miembros más importantes del grupo y es conocida por su habilidad con las armas y su valentía en situaciones peligrosas.',
    image: 'ursula_corbero.jpeg',
    details: {
      bornDate: '11/08/1989',
      nationality: 'Española',
      long_description: 'Úrsula Corberó es una actriz española nacida en Barcelona en 1989. Es conocida por su papel de Tokio en la exitosa serie de televisión española "La Casa de Papel". Corberó ha trabajado en cine y televisión desde que era joven y ha recibido varios premios por sus actuaciones, incluyendo el premio a Mejor Actriz en el Festival de Cine de Málaga. Además de su carrera actoral, Corberó ha trabajado como modelo y ha participado en campañas publicitarias para varias marcas de moda y belleza.',
      hobbies: 'viajar, leer y la música.'
    }
  },
  {
    id: 2,
    name: 'Miguel Herrán',
    short_description: 'Río es uno de los miembros más jóvenes del grupo y es un experto en tecnología y electrónica. Es el encargado de comunicarse con la policía y de mantener la seguridad.',
    image: 'miguel-herran.jpg',
    details: {
      bornDate: '11/08/1989',
      nationality: 'Española',
      long_description: 'Úrsula Corberó es una actriz española nacida en Barcelona en 1989. Es conocida por su papel de Tokio en la exitosa serie de televisión española "La Casa de Papel". Corberó ha trabajado en cine y televisión desde que era joven y ha recibido varios premios por sus actuaciones, incluyendo el premio a Mejor Actriz en el Festival de Cine de Málaga. Además de su carrera actoral, Corberó ha trabajado como modelo y ha participado en campañas publicitarias para varias marcas de moda y belleza.',
      hobbies: 'viajar, leer y la música.'
    }
  },
  {
    id: 3,
    name: 'Álvaro Morte',
    short_description: 'El Profesor es el cerebro detrás del robo a la Fábrica Nacional de Moneda y Timbre, y dirige a los demás miembros del equipo desde el exterior.',
    image: 'alvaro-morte.jpg',
    details: {
      bornDate: '11/08/1989',
      nationality: 'Española',
      long_description: 'Úrsula Corberó es una actriz española nacida en Barcelona en 1989. Es conocida por su papel de Tokio en la exitosa serie de televisión española "La Casa de Papel". Corberó ha trabajado en cine y televisión desde que era joven y ha recibido varios premios por sus actuaciones, incluyendo el premio a Mejor Actriz en el Festival de Cine de Málaga. Además de su carrera actoral, Corberó ha trabajado como modelo y ha participado en campañas publicitarias para varias marcas de moda y belleza.',
      hobbies: 'viajar, leer y la música.'
    }
  },
  {
    id: 4,
    name: 'Ursula Corberó',
    short_description: 'Tokio es una de las miembros más importantes del grupo y es conocida por su habilidad con las armas y su valentía en situaciones peligrosas.',
    image: 'ursula_corbero.jpeg',
    details: {
      bornDate: '11/08/1989',
      nationality: 'Española',
      long_description: 'Úrsula Corberó es una actriz española nacida en Barcelona en 1989. Es conocida por su papel de Tokio en la exitosa serie de televisión española "La Casa de Papel". Corberó ha trabajado en cine y televisión desde que era joven y ha recibido varios premios por sus actuaciones, incluyendo el premio a Mejor Actriz en el Festival de Cine de Málaga. Además de su carrera actoral, Corberó ha trabajado como modelo y ha participado en campañas publicitarias para varias marcas de moda y belleza.',
      hobbies: 'viajar, leer y la música.'
    }
  }
]

}
