import { Actors } from "src/app/models/actors.inteface";
import { ActorsDetails } from "src/app/models/actors.inteface";
export const ACTORS: Actors[] = [
    {
        id: 1,
        name: 'Ursula Corberó',
        short_description: 'Tokio es una de las miembros más importantes del grupo y es conocida por su habilidad con las armas y su valentía en situaciones peligrosas.',
        image: 'ursula-corbero.jpeg',
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
            bornDate: '25/04/1996',
            nationality: 'Español',
        long_description: 'Miguel Herrán es un actor español nacido en Málaga el 25 de abril de 1996. Se dio a conocer en el mundo del cine con su papel protagonista en la película "A cambio de nada" dirigida por Daniel Guzmán, en la que interpreta a Darío, un adolescente que se rebela contra su situación familiar y busca su propio camino en la vida. Además de su trabajo en cine y televisión, Herrán ha trabajado también como modelo, y ha participado en campañas publicitarias para varias marcas de moda y belleza. Ha recibido varios premios por su trabajo en la industria del entretenimiento, incluyendo el premio Goya a Mejor Actor Revelación por su actuación en "A cambio de nada".',
        hobbies: 'leer y también disfruta del cine, la música y los deportes.'
        }
    },
    {
        id: 3,
        name: 'Álvaro Morte',
        short_description: 'El Profesor es el cerebro detrás del robo a la Fábrica Nacional de Moneda y Timbre, y dirige a los demás miembros del equipo desde el exterior.',
        image: 'alvaro-morte.jpg',
        details: {
            bornDate: '23/02/1975',
            nationality: 'Español',
            long_description: 'Álvaro Morte es un actor español nacido en Algeciras el 23 de febrero de 1975. Se graduó en Interpretación Textual en la Escuela Superior de Arte Dramático de Córdoba y ha trabajado en teatro, cine y televisión. En televisión, ha participado en series como "Los hombres de Paco", "La zona", "El secreto de Puente Viejo" y "El embarcadero". Sin embargo, su papel más destacado hasta el momento ha sido el de "El Profesor" en la exitosa serie española "La Casa de Papel", producida por Netflix. Este papel le ha valido numerosos premios y nominaciones, así como una gran popularidad en todo el mundo.',
            hobbies: 'la lectura, el cine, el teatro y la música.'
        }
    },
    {
        id: 4,
        name: 'Jaime Lorente',
        short_description: 'Denver es el hijo de Moscú y uno de los miembros del grupo de ladrones liderados por El Profesor. Denver es un personaje carismático y leal, aunque a veces impulsivo.',
        image: 'jaime-lorente.jpeg',
        details: {
            bornDate: '12/12/1991',
            nationality: 'Español',
            long_description: 'Jaime Lorente es un actor español nacido en Murcia el 12 de diciembre de 1991. Es conocido por interpretar a Denver en la serie española de televisión "La Casa de Papel" y a Nano en la serie "Élite", ambas producciones de Netflix. Lorente se graduó en la Escuela Superior de Arte Dramático de Murcia en 2013 y después se trasladó a Madrid para continuar su carrera de actuación. En 2016, tuvo su primer papel en la televisión en la serie española "El secreto de Puente Viejo" antes de obtener el papel de Denver en "La Casa de Papel" en 2017. Su actuación en la serie fue muy aclamada por el público y la crítica, lo que le permitió obtener un gran reconocimiento internacional.',
            hobbies: 'el boxeo y el fútbol, también disfruta mucho de la lectura.'
        }
    },
    {
        id: 5,
        name: 'Itziar Ituño',
        short_description: 'Raquel es una inspectora de policía de gran inteligencia y tenacidad que es asignada para liderar la investigación del robo de la Fábrica Nacional de Moneda y Timbre.',
        image: 'itziar-ituno.jpeg',
        details: {
            bornDate: '18/06/1974',
            nationality: 'Española',
            long_description: 'Itziar Ituño es una actriz española nacida el 18 de junio de 1974 en Basauri, País Vasco. Es conocida por interpretar el papel de Raquel Murillo/Lisboa en la exitosa serie española "La Casa de Papel". Ituño comenzó su carrera como actriz en el teatro antes de dar el salto a la televisión. A lo largo de su carrera ha aparecido en numerosas producciones de teatro, cine y televisión en España.',
            hobbies: 'la actuación y la música'
        }
    },
    {
        id: 6,
        name: 'Pedro Alonso',
        short_description: 'Berlín es uno de los miembros principales de la banda de ladrones, y es considerado el cerebro detrás del atraco a la Fábrica Nacional de Moneda y Timbre.',
        image: 'pedro-alonso.jpg',
        details: {
            bornDate: '21/06/1971',
            nationality: 'Español',
            long_description: 'Pedro Alonso es un actor español nacido el 21 de junio de 1971 en Vigo, Galicia, España. Es conocido por su papel de "Berlín" en la serie de televisión española "La Casa de Papel", que se ha convertido en un éxito internacional. Además de "La Casa de Papel", Alonso ha aparecido en varias películas y series de televisión en España. Entre sus créditos destacados se encuentran "Los hombres de Paco", "Padre Casares", "La embajada" y "El ministerio del tiempo". También ha trabajado como director y guionista en algunos proyectos.',
            hobbies: 'la música y la literatura'
        }
    }
]