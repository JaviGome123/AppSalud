require('./bascula.js');

class Paciente{

    nombre=null;
    apellido=null;
    fechaNacimiento=null;
    bascula=null;
    


constructor(nom, ape, fecha){

    this.nombre=nom;
    this.apellido=ape;
    this.fechaNacimiento=fecha;
    this.bascula=null;
    
}

saludar(){

    var saludo="Hola soy " + this.nombre + " " + this.apellido;

    return saludo;
}

obtenerNombre(){

    console.log(this.nombre);

    return this.nombre;
}

modificarNombre(nombre){

    this.nombre=nombre;
}

obtenerApellidos(){

    return this.apellido;
}

modificarApellidos(apellidos){

    this.apellido=apellidos;
}

obtenerFechaNacimiento(){

    return this.fechaNacimiento;
}

modificarFechaNacimiento(fecha){

    this.fechaNacimiento=fecha;
}

obtenerEdad(){

    //console.log("Fecha nacimiento:"+ this.fechaNacimiento);

    var myDate = this.fechaNacimiento.split('/');
    //console.log(myDate);
    //console.log("aaaa: "+myDate[2]);
    //console.log("mm: "+myDate[1]);
    //console.log("dd:"+myDate[0]);
    var cumple=new Date(myDate[2], myDate[1]-1, myDate[0]);
    //console.log(cumple)

    var hoy=new Date();

    var edad = hoy.getFullYear() - cumple.getFullYear();;
    var m = hoy.getMonth() - cumple.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
    }
//console.log(edad);
    return edad;
}

modificarBascula(bascula){

    this.bascula=bascula;

}

obtenerBascula(){

    return this.bascula;
}

calcularIMC(){
    if(this.bascula==null)
        return -1;
    else
        return this.bascula.calcularIMC();

}

}

module.exports=Paciente;