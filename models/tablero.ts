import Pieza from './pieza';

class Tablero {



    _listado: object ;

    constructor (){
        this._listado = {}
    }

    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach (key =>{

            const pieza = this._listado[key];
            listado.push (pieza)
        })



        return listado
    }

    crearPieza( desc : string){
        const pieza = new Pieza(desc);
        this._listado [pieza.id] = pieza;
    }

    cargarPiezasFromArray ( piezas= [] ) {

        piezas.forEach ( pieza => {
        this._listado [pieza.id] = pieza;
           
        });


    }

    listadoCompleto(){
        this.listadoArr.forEach ( (pieza,i) => {

            const idx = i + 1;
            const { desc } = pieza;

            console.log(`${ idx } ${ desc }`)
        });

        
    }

    mover(){
        
        this.listadoArr.forEach ( (pieza,i) => {

            const idx = i + 1;
            const { desc } = pieza;
            if(desc.toLowerCase() === 'caballo') console.log(`soy un ${desc } y me muevo en L`)
            if ( desc.toLowerCase() === "alfil") console.log( `soy un ${desc } y Me muevo en Diagonal`)
            if ( desc.toLowerCase() === "torre") console.log (`soy un ${desc } y Me muevo en Horizontal y Vertical`)
            if (  desc.toLowerCase()=== "reina") console.log (`soy un ${desc } y Me muevo por donde quiero`)
            if ( desc.toLowerCase() === "rey") console.log (`soy un ${desc }  y Me muevo en todas las diracciones pero solo un casillero`)
            if ( desc.toLowerCase() === "peon") console.log(`soy un ${desc } y Me muevo en para adelante`)
    
        });
    }
}

export default Tablero
