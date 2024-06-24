const empleados = [
    {
        id: 1,
        nombre: "Isaac"
    },

    {
        id:2,
        nombre: "Carlos"
    },
    
    {
        id: 3,
        nombre: "Pedro"
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },

    {
        id:2,
        salario: 800,
    }
]

const getEmpleadosById = (id) => {

    const empleado = empleados.find( e => e.id === id)?.nombre

        return  new Promise((resolve, reject) => {
            (empleado)

                ?resolve(empleado)
                : reject(`No existe un empleado con id ${id}`);
        });

};
const getSalarios = (id) => {
    
    const salario = salarios.find(s => s.id === id)?.salario
    
    return new Promise((resolve, reject) => {

        (salario)
            ?resolve(salario)
            :reject(`No existe el salario del empleado con el id ${id}`);
    });
}

const getInfoUser = async( id ) => {

    try {

    const empleado = await getEmpleadosById(id);
    const salario = await getSalarios(id);
    
    return`El salario del empleado ${empleado} es de ${salario}`;

    }
    catch(error){
        throw error;
    }
}

const id = 1;

getInfoUser( id)
    .then(msg =>{
        console.log('Todo Bien')
        console.log(msg)
    })

    .catch(err => {
        console.log('Algo ocurrio...')
        console.log(err)
    });

