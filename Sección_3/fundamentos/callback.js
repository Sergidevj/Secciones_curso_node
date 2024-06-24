



// setTimeout(()=> {
//     console.log("Hola Mundo")
// }), 1000;

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre : 'Sergio',
    };

    setTimeout(() => {
        callback(user);
    }, 100)
};

getUsuarioById( 10, (usuario) =>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase())
});




