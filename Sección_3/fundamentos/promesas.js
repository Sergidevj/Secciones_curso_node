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
    })
}


const id = 3;

// getEmpleadosById(id)
//     .then(empleados => console.log(empleados))
//     .catch(err => console.log(err))

// getSalarios(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

//Promesas en cadena

let nombre;


getEmpleadosById(id)
    .then(empleado => {
        nombre = empleado;
        return getSalarios(id)
    })
    .then(salario=> console.log('El empleado:', nombre, 'tiene un salario de', salario))

    .catch(err => console.log(err));

    