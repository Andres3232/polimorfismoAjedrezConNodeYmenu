
import inquireMenu from './inquirer';
import { leerInput } from './inquirer';
import Tablero from './models/tablero';
import { pausa } from './inquirer';
//import leerDB from './guardarPiezas';
//import guardarDB from './guardarPiezas'
const {guardarDB,leerDB} = require ('./guardarPiezas')

const main = async() => {
    
    let opt:string;
    const tablero = new Tablero();
    const tareasDb = leerDB();
    if ( tareasDb ) {
        //cargar tareas
        tablero.cargarPiezasFromArray( tareasDb)

    }


    do {
        opt = await inquireMenu()
        switch (opt) {
            case '1':
                 const desc = await leerInput("Descripcion: ")
                 tablero.crearPieza(desc)
                 
                 break;
            case '2':
                tablero.listadoCompleto()

                    
                break;
             case '3':
                        tablero.mover()
        
                            
                break;
                    
                 
                
                    }
                    
                guardarDB(tablero.listadoArr)
                await pausa();
                
                guardarDB
                } while (opt !== '0');
                
                
            }

            
            main()
            // for (let pieza of tablero){
            //     console.info (pieza.moverse())
            // }