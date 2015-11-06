"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida(valor, tipo) {
    this.valor=valor || 0;
    this.tipo=tipo || "C";
    
    this.get_valor = function(){
        return this.valor;
    };
    this.get_tipo = function(){
        return this.tipo;
    };
    this.set_valor = function(valor){
        this.valor=valor;
    };
    this.set_tipo = function(tipo){
        this.tipo=tipo;
    };
    /*this.devolver = function(type) {
      if (!type)
        throw new Error("missing tipo");
      return this.valor + type;
    };*/
    this.devolver = function(type) {
      if (!type)
        return console.error("missing type");
      console.log(this.valor + " greets " + type);
    };
  };

function Temperatura () {
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;

Temperatura.prototype.CtoF = function(){
  return (this.get_valor()*9/5)+32;
};

Temperatura.prototype.FtoC = function(){
  return (this.get_valor()-32)*5/9;
};

Temperatura.prototype.init = function(temp){
    var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])\s*$/i;
    var valor = temp.match(regexp);
    if(valor !== null){
    this.set_valor(parseFloat(valor[1]));
    this.set_tipo(valor[2]);
    }
};

Temperatura.prototype.convert = function(){
  if(this.get_valor() === undefined || this.get_tipo() === undefined){
    return ("ERROR! Prueba con algo como esto '-4.2C'");
  }

  if(this.get_tipo() === 'C' || this.get_tipo() ==='c'){
    var result = (this.get_valor()*(9/5))+32;
    return ("El resultado es " + result + " " + "F");
  }

  else{
    var result = (this.get_valor()-32)*(5/9);
    return ("El resultado es " + result + " " + "C");
  }
  
};