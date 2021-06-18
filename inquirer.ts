


const inquirer = require ('inquirer')

require ('colors');

const preguntas = [
    {
        type: 'list',
        name:'opcion',
        message: 'Que desaa hacer?',
        choices: [
            {
                value: '1',
                name: `'1'. Crear Pieza`
            },
            {
                value: '2',
                name: `'2'. Listar Piezas`
            },            
            {
                value: '3',
                name: `'3'. Mover piezas`
            },
        ]
    }
];

export const inquireMenu = async() => {

    console.clear ();
    console.log('========================')
    console.log('  Selecione una opcion')
    console.log('========================\n')

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion;


}

export const leerInput = async (message) =>{

    const question = [
        {
            type: 'indput',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    
    const {desc} = await inquirer.prompt (question)
    return desc;
}
export const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione 'ENTER' para continuar`
        }
    ];

    console.log('\n')
   await inquirer.prompt(question)

}

export default inquireMenu;leerInput;pausa