
function Player (nick) {
   this.nick = nick;
   this.lp = 100;
   this.sp = 100;

   this.live = function(targetPlayer){
      if(targetPlayer.lp === 0){
         console.warn(targetPlayer.nick + " " + "este jugador esta muerto... 😐 puedes usar revivir!");

      }

   }

   this.cure = function(targetPlayer){

      if(this.sp >= 60){
         this.sp -= 60;
         targetPlayer.lp += 30;

      }else{
         console.warn(this.nick + " no tiene mana 😵😵😵😵😵!!!!");
      }
      this.live(targetPlayer);
      this.state(targetPlayer);

   }

   this.puñoFuego = function(targetPlayer){
      if(targetPlayer.lp >= 60){
         this.sp -= 30;
         targetPlayer.lp -= 60;
      }else{
         targetPlayer.lp = 0;
         console.error(targetPlayer.nick + " " + "se ha quemado 🔥🔥🔥🔥🔥!!!");
      }
      this.live(targetPlayer);
      this.state(targetPlayer);
   }

   this.patada = function(targetPlayer){
      if(targetPlayer.lp >= 70){
         this.sp -= 40;
         targetPlayer.lp -= 70;

      }else{
         targetPlayer.lp = 0;
         console.error(targetPlayer.nick + " " + "ha muerto 😵😵😵😵😵!!!!");
      }
      this.live(targetPlayer);
      this.state(targetPlayer);

   }
   //this.point = function(targetPlayer){

   //}

   this.state = function(targetPlayer){
      console.info(this);
      console.info(targetPlayer);
   }

}

var miguel = new Player("Theotherface");
var palma = new Player("Palma");
var javi = new Player("Javier");
var jorge = new Player("Jomuri");

console.log(miguel);
console.log(palma);
console.log(javi);
console.log(jorge);

palma.cure(miguel);

