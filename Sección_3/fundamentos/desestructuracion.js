

const Deadpool = {
    nombre : 'Wade',
    apellido : 'Willson',
    poder : 'Regeneración',
    edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }
};

// const nombre = Deadpool.nombre;
// const apellido = Deadpool.apellido;
// const poder = Deadpool.poder;

function imprimeHeroe({nombre, apellido, poder, edad} ) {
    // const { nombre, apellido, poder, edad } = Deadpool;
    nombre = "luis";
    console.log(nombre, apellido, poder, edad);

}

imprimeHeroe(Deadpool)

// const heroes = ['Deadpool', 'Superman', 'SuperBigote']

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// const [,h2 , ] = heroes;

// console.log(h2);

