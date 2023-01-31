class Bascula{

    pesos=null;
    alturas=null;
    fechas=null;
    anotaciones=-1;



constructor(){

    this.fechas=new Array();
    this.pesos=new Array();
    this.alturas=new Array();
    this.anotaciones=0;
}

obtenerNumeroAnotaciones(){
    
    return this.anotaciones;
}

anotarPeso(peso,altura="1",fecha=new Date()){

    this.pesos.push(peso);
    this.alturas.push(altura);
    this.fechas.push(fecha);
   
    this.anotaciones++;
    
}

obtenerPesoMaximo(){

    let maximo=0;
    let i=0;

    if(this.pesos.length==0){
        maximo=0;
    }
    else

        for(i=0;i<=this.pesos.length;i++){
            if(this.pesos[i]>maximo){
                maximo=this.pesos[i];
            }
        }

    return maximo;
}

obtenerPesoMinimo(){

    let minimo=this.pesos[0];

    if(this.pesos.length==0){
        minimo=0;
    }
    else

        for(let i=0;i<=this.pesos.length;i++){
            if(this.pesos[i]<minimo){
                minimo=this.pesos[i];
            }
        }

    return minimo;
}

calcularIMC(){
        let p=this.pesos.length-1;
        let a=this.alturas.length-1;
        let aa=parseFloat(this.alturas[a]);
        let imc=this.pesos[p]/(Math.pow(aa,2));
        imc = imc.toFixed(2);
        return imc;
   
}

static describirIMC(imc){

    var descripcion="";

    if(imc<16){
        descripcion="<16.00: Infrapeso (delgadez severa)";
    }
    else if(imc>=16 && imc<17){
        descripcion="16.00 – 16.99: Infrapeso (delgadez moderada)";
    }
    else if(imc>=17 && imc < 18.5){
        descripcion="17.00 - 18.49: Infrapeso (delgadez aceptable)";
    }
    else if(imc>=18.5 && imc<25){
        descripcion="18.50 - 24.99: Peso normal";
    }
    else if(imc>=25 && imc<30){
        descripcion="25.00 - 29.99: Sobrepeso";
    }
    else if(imc>=30 && imc<35){
        descripcion="Obeso (Tipo 1)";
    }
    else if(imc>=35 && imc<=40){
            descripcion="Obeso (Tipo 2)";
    }
    else if(imc>=40){
        descripcion="Obeso (Tipo 3)";
    }

    return descripcion;
}

}

module.exports=Bascula;