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

const getEmpleadosById = (id, callback) => {

    const empleado = empleados.find( e => e.id === id)?.nombre

    if(empleado){
        callback(null ,empleado)
    }
    else{
        callback(`El empleado con la id ${id} no existe`)
    };
    
};

const getSalariosById= (id, callback) => {
    
    const salario = salarios.find( event =>event.id === id)?.salario
    
    if(salario){
        callback(null, salario)
    }
    else{
        callback(`El salario con la id ${id} del empleado no existe`)
    }

}

const id = 3;

getEmpleadosById( id ,(error, empleado) => {
    
    if(error){
        console.log('ERROR');
        return console.log(error); 
    }

    getSalariosById(id, (err, salario) => {
        if(err){
            console.log('ERROR')
            return console.log(err)
        }
        
        console.log('El siguiente', empleado, "Tiene asignado un salario de ", salario )
    })
});

