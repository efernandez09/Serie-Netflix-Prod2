/* Por motivos referentes a los "FormControls" hemos decidio excluir el tipo de dato "details"
 * Ya que no acepta tipos de datos personalizados, solo primarios. Y el hacer la conversion iba
 * ha ser demasiado código para una funcionalidad tan simple.
*/


// Declaramos el tipado que tendrán todos los registros de los actores
export interface Actors {
    id?: number
    name: string
    short_description: string
    image: Array<string>
    video: Array<string>
    bornDate: string
    nationality: string
    long_description: string
    hobbies: string
    // details?: ActorsDetails
  }

// export interface ActorsDetails {
//     bornDate: string
//     nationality: string
//     long_description: string
//     hobbies: string
//   }
  
