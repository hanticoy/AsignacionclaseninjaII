class Ninja {
    nombre='';
    vida = 100;
    velocidad=3; //con javascrip no debiera poder dejarse privada
    fuerza = 3;  //con javascrip no debiera poder dejarse privada

    constructor (inNombre) {
        this.nombre = inNombre;
    }

    sayName(){
        return this.nombre;
    }

    showStats(){
        console.log('nombre:' + this.nombre + ', vidas:' + this.vida + ', fuerza:' + this.fuerza + ', velocidad:' + this.velocidad  );
    }

    drinkSake(){
        this.vida += this.vida + 10;
    }

    punch(MyNinja){
        
        if (!(MyNinja instanceof Ninja)){
            return "Solo un 'Ninja' puede golpear a otros Ninjas!!"
        }

        MyNinja.vida -= 5;
        
        if (MyNinja.vida > 84){
            return this.nombre + ' golpeó a ' + MyNinja.nombre + ' y perdió 5 de vida';
        }else{
            return this.nombre + ' le saco la cresta a ' + MyNinja.nombre + ' y perdió casi la vida';
        } 
    }

    kick(MyNinja){

        if (!(MyNinja instanceof Ninja)){
            return "Solo un 'Ninja' puede golpear a otros Ninjas!!"
        }
       
        let menosVidas = (15 * this.fuerza)
        MyNinja.vida -= menosVidas;

        return this.nombre + ' le hizo un OUUUUYUUUUKE!! a ' + MyNinja.nombre + ' y perdió '  + menosVidas + ' de  vida';
    }
}



var blueNinja = new Ninja("Riu");
var redNinja = new Ninja("Ken");
redNinja.fuerza = 2;

console.log('punch:' + redNinja.punch(blueNinja));
console.log('punch:' + redNinja.punch(blueNinja));
console.log('punch:' + redNinja.punch(blueNinja));
console.log('punch:' + redNinja.punch(blueNinja));
console.log('');
console.log('Ahora Siii OOOOOOOUUUU!!...');
console.log('kick:' + redNinja.kick(blueNinja));
console.log('');
console.log('kick: 1' + redNinja.kick(1));



