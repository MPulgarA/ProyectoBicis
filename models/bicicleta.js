// class Bicicleta{

//     constructor(id, color, modelo, ubicacion){
//         this.id = id;
//         this.color = color;
//         this.modelo = modelo;
//         this.ubicacion = ubicacion;
//         this.allBicis = [];
//     }

//     datoBici(){
//         return `id:${this.id}  | color: ${this.color}`;
//     }

//     ingresarBicis(arrBici){
//         this.allBicis.push(arrBici);
//     }
 
    
   
// }

// const bici1 = new Bicicleta(1, 'Rojo','Montain','Los Angeles');
// const bici2 = new Bicicleta(2, 'Azul','Ciclismo','Los Angeles');

// bici1.ingresarBicis(bici1);
// bici1.ingresarBicis(bici2);

var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){

}

Bicicleta.allBicis = [];

Bicicleta.ingresarBicis = function(arrBicis){
    Bicicleta.allBicis.push(arrBicis);
}


Bicicleta.findById = function(id){
    var aBici = Bicicleta.allBicis.find(x => x.id == id)
    if(aBici)
        return aBici
    else
        throw new Error(`No existe la bicicleta con el id ${aBici}`);
}

Bicicleta.removeById = function(id){
    Bicicleta.allBicis.forEach((bici, i) =>{
        if(bici.id == id){
            Bicicleta.allBicis.splice(i, 1);
        }
    });
}

var a = new Bicicleta(1, 'Rojo', 'urbana', [-37.466438,-72.361330]);
var b = new Bicicleta(2, 'Azul', 'Montain', [-37.470090,-72.359740]);

Bicicleta.ingresarBicis(a);
Bicicleta.ingresarBicis(b);

module.exports = Bicicleta;