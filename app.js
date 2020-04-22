//DEFINIMOS LA CLASE CITA, CON LOS VALORES CITA Y AUTOR. LLAMAREMOS AL CONSTRUCTOR PARA CREAR NUEVAS CITAS
//Y LOS METODOS GETCITA Y GETAUTOR PARA CAMBIAR LA CITA EN EL HTML.
class Cita { 
    constructor(cita, autor) {
    this.cita = cita;
    this.autor = autor;
    }
    //get cita() {
    //    return(this._cita);
    //}
    //get autor() {
    //    return(this._autor);
    //}
    //IMPORTANTE, INTENTÉ PONER LOS SETTER Y GETTERS PERO NO ME LOS RECONOCE COMO FUNCIONES, ASI QUE BUSCO POR NOMBRES
    //DE ATRIBUTOS, LO SIENTO JUDITH/MATI.
}


//AÑADIR UN VECTOR DE CITAS. SOSPECHO QUE DEBERIA HACERLO EN FORMA DE CLASES.
let vectorCitas = new Array(0);

let cita = new Cita("la belleza de un paisaje... radica en, no sé", "TuVieja");
vectorCitas.push(JSON.stringify(cita)); //ACA CONVIERTO LA CLASE A UN STRING PARA MAYOR FACILIDAD DE USO Y PLACER

cita = new Cita("Boca la concha de tu madre, BOCA LA CONCHA DE TU MADRE", "Un Pecho Frio");
vectorCitas.push(JSON.stringify(cita)); //ACA CONVIERTO LA CLASE A UN STRING PARA MAYOR FACILIDAD DE USO Y PLACER

cita = new Cita("Todos necesitamos soñar. No hay que perder la esperanza en que es posible conseguir algo más que lo que una tiene.", "Cecelia Ahern");
vectorCitas.push(JSON.stringify(cita));

cita = new Cita("Todos somos aficionados. La vida es tan corta que no da para más.", "El Carlitos Chaplin");
vectorCitas.push(JSON.stringify(cita));

cita = new Cita("Si lees esto, todavia tengo uno de tus tickets.", "TomasinoElCapo");
vectorCitas.push(JSON.stringify(cita));

cita = new Cita("Tener un hijo, plantar un árbol y escribir un libro es fácil. Lo difícil es criar un niño, regar el árbol y que alguien lea el libro.", "Anónimo");
vectorCitas.push(JSON.stringify(cita));

cita = new Cita("De ningún laberinto propio se sale con llave ajena.", "Un sabio");
vectorCitas.push(JSON.stringify(cita));

cita = new Cita("Te dicen Matilda? Porque levantas cosas sin tocarlas.", "Frodencio");
vectorCitas.push(JSON.stringify(cita));

cita = new Cita("Se me murió el pájaro. ¿Me dejas enterrartelo en la cola?.", "Dicho popular");
vectorCitas.push(JSON.stringify(cita));



for (let i=0; i<vectorCitas.length; i++) {
    console.log(JSON.parse(vectorCitas[i])); //CONVIERTO EL STRING A OBJETO PARA MAYOR PLACER
}

document.addEventListener("click", generarCita())

function generarCita() {
    cambiarColor()
    cambiarCita()
}

function cambiarColor() {
    var colorAleatorio = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + colorAleatorio;
}

function cambiarCita() {
    let contenedorCita = document.getElementById("cita");
    let contenedorAutor = document.getElementById("autor");
    
    let aleatorio = Math.floor(Math.random() * vectorCitas.length);
    //Explicación: Math.random tira un numero entre cero y uno. lo multiplicamos por el largo del vector de citas.
    //Así, si hay 5 elementos en el vector, no dará un numero entre 0 y 4 (son 5 posiciones).
    //El math.floor lo que hace es redondear para abajo, así solo nos salen enteros sin decimal.

    let cit = JSON.parse(vectorCitas[aleatorio]);
    contenedorCita.innerHTML = `"` + cit.cita + `"`;
    contenedorAutor.innerHTML = cit.autor;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrar() {
    document.getElementById("visible").style.display = "none";
    document.getElementById("btnCitas").style.display = "none";
    document.getElementById("oculto").style.display = "flex";
}

function volver() {
    document.getElementById("visible").style.display = "flex";
    document.getElementById("btnCitas").style.display = "inline";
    document.getElementById("oculto").style.display = "none";
}

function enviar() {
    let nuevaCita = document.getElementById("txtCita");
    let nuevoAutor = document.getElementById("txtAutor");
    if (nuevaCita.value != "") {
        let cita = new Cita(nuevaCita.value, nuevoAutor.value); //necesitamos el valor de estos textos
        vectorCitas.push(JSON.stringify(cita)); //IMPORTANTE, NO OLVIDAR EL STRINGIFY.
        nuevaCita.value = "";
        nuevoAutor.value = ""; //vaciamos el contenido para que no lo meta cuarenta veces.
    }
    
}