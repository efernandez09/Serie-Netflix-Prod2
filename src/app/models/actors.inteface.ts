// Declaramos el tipado que tendrán todos los registros de los actores
export interface Actors {
    id: number
    name: string
    short_description: string
    image: string
    details?: ActorsDetails
  }

// A su vez también debemos declarar el tipado de los "ActorsDetails" ya que este registro contendrá otros registros.
// Para que estos registros sean almacenados deberemos hacerlo en modo de obejto {} 
/**
Ejemplo:

 * const actor: Actors = {
  id: 1,
  name: "Juan Pérez",
  short_description: "Actor y cantante",
  image: 'actor.jpg',
  details: {
    bornDate: "1990-01-01",
    nationality: "Mexicana",
    long_description: "Actor y cantante reconocido por su trabajo en...",
    hobbies: "Leer, viajar y escuchar música"
  }
 */
export interface ActorsDetails {
    bornDate: string
    nationality: string
    long_description: string
    hobbies: string
  }
  