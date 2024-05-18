var P1=new Object()
var P2=new Object()


P1.affichage=""
  P2.affichage=""

  P1.signe=""
  P2.signe=""

var ordre;
var ran
  
  


  
var Ordi=true// booleeen true car on joue contre l'ordi


  
  P1.signe="X", P2.signe="O"; // L'ordi joue en premier"
ordre=1
Ordi=true



var btn = document.getElementsByClassName("case");



for (const bt of btn) {

   bt.addEventListener("click", jouer)



 }



  
   P1.signe="X", P2.signe="O" ,
  P1.affichage="C'est votre tour" 
  
  
  
  document.getElementById("tdj").innerText=P1.affichage
  
    
  function collecter ()
  
  {
  //btns boutton local
  
  var source = [];
  
  
    var btns = document.getElementsByClassName("case");
  
    for (let a = 0; a < btns.length; a++) {
      source[a] = btns[a].innerText;
      
     }
  
     return source;
  
  
    }
  
  
      
  // Les variables globales
  
  var ensemble=[90], ipartie=0;
  
  var count=0,l1=0, l11=0, l2=0, l22=0, l3=0, l33=0, co1=0, co11=0, co2=0, co22=0, co3=0, co33=0, d1=0, d11=0, d2=0, d22=0
  var  j=0, gagner=false
  
  /**Fin variables globales */
  
  var btn = document.getElementsByClassName("case");
  
  var jeu, n=0
  
  jeu=collecter()
  
  //Comptage et sauvegarde

  //Voir comment integrer ca dans le second vu qu'il depend
  //de l'event listener
  
  for( ipartie; n< jeu.length; n++) {
    
    ensemble[ipartie] = jeu[n]
  ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble
  
  }
  
  n=0;
  
  
  var btn = document.getElementsByClassName("case");
  
  var source0 = [];
  
  
    /**Partie ou l'utilisateur joue*/

    for (const bt of btn) {
  
        bt.addEventListener("click", jouer)
      
      } 
    

  
  

      function win () {

        jeu=collecter()
        l1=0;co1=0;l11=0;co11=0;l2=0;co2=0;l22=0;co22=0;l3=0;co3=0;l33=0;co33=0;d1=0;d11=0;d2=0;d22=0;
        let a=0;
        
        for(let a=0;a<3;a++)
        {
        
        switch (jeu[a]) // CASE 0
        { case 'X':l1++; 
        
        break; 
        
        
        case 'O':l11++;
        break; 
        
        }
        
        }
        
        
        
        
        for(a=3;a<6;a++)
        {
        
        switch (jeu[a]) 
        { case 'X':l2++; 
        
        break; 
        
        
        case 'O':l22++;
        break; 
        
        }
        
        }
        
        for(a=6;a<9;a++)
        {
        
        switch (jeu[a])
        { case 'X':l3++;
        
        break; 
        
        
        case 'O':l33++;
        break; 
        
        }
        
        }
        
        //Les collonnes
        
        for(let a=0;a<9;a=a+3)
        {
        
        switch (jeu[a])
        { case 'X':co1++; 
        
        break; 
        
        
        case 'O':co11++;
        break; 
        
        }
        
        }
        
        
        
        
        for(a=1;a<9;a=a+3)
        {
        
        switch (jeu[a]) 
        { case 'X':co2++; 
        
        break; 
        
        
        case 'O':co22++;
        break; 
        
        }
        
        }
        
        for(a=2;a<9;a=a+3)
        {
        
        switch (jeu[a]) // CASE 0
        { case 'X':co3++;
        
        break; 
        
        
        case 'O':co33++;
        break; 
        
        }
        
        }
        
        
        for(a=0;a<9;a=a+4)
        {
        
        switch (jeu[a]) // CASE 0
        { case 'X':d1++;
        
        break; 
        
        
        case 'O':d11++;
        break; 
        
        }
        
        }
        
        
        
        for(a=2;a<9;a=a+2)
        {
        
        switch (jeu[a]) // CASE 0
        { case 'X':d2++;
        
        break; 
        
        
        case 'O':d22++;
        break; 
        
        }
        

        }
        
        
        if( (  (l1===3)||(l2===3)||(l3===3)// Si le 1er joueur gagne
            || (co1===3)||(co2===3)||(co3===3)
           ||(d1===3)||(d2===3)
            )
          
          )
        
        {

          gagner=true

            for (const bt of btn) {
          
                bt.disabled=true
                                   } 
        /*
        if(Ordi===true)// Si on joue contre l'ordi
        {*/
        document.getElementById("tdj").innerText="Vous avez gagné"
       /* }*/
        
        /*
        if(Ordi===false)// Si on joue contre le 2eme joueur
        {
        document.getElementById("tdj").innerText="Le 1er joueur a gagné"
        }
        */
        
        }
        
        
        
        
        
        if( (  (l11===3)||(l22===3)||(l33===3)
           || (co11===3)||(co22===3)||(co33===3)
           ||(d11===3)||(d22===3)
            )
          )
        
        {

          gagner=true

            for (const bt of btn) {
          
                bt.disabled=true
                                   } 
        /*
        if(Ordi===true)// Si l'ordinateur gagne
        {*/
        document.getElementById("tdj").innerText="L'ordinateur a gagne"
        /*}*/
        
        /*
        if(Ordi===false)// Si Le 2eme joueur gagne
        {
        document.getElementById("tdj").innerText="Le 2eme joueur a gagné"
        }
        */
        
        }
        
        
        
        
        }
        




  function jouer (){


  
  if( count===9){
  
    document.getElementById("tdj").innerText="Jeu fini"
    }

  /**Partie ou on joue contre l'ordinateur */
  /**************************************** */

  if( Ordi===true )
  {
  
/*Partie ou le jouer joue**/

//Le joueur joue en premier ou en deuxieme

    
count++;
  
jeu=collecter();    

this.innerText=P1.signe

console.log("Ce que je cherche :"+P1.signe)

this.disabled=true

jeu=collecter();   

for( ipartie; n< jeu.length; n++) {

  ensemble[ipartie] = jeu[n]
ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble

}
n=0;


console.log(ipartie)

console.log(jeu)

console.log(ensemble)

document.getElementById("tdj").innerHTML=P1.affichage

console.log(tdj)


win()
    /**L'ordinateur joue */

if(gagner===false){
    if(count<9)
        {
            count++;

    
        jeu=collecter(); 
        
        do{ ran=Math.floor(Math.random()*9)
        
        }while( document.getElementsByClassName("case")[ran].innerText!=="" )
        
        
        
        jeu=collecter();    
        
        
        document.getElementsByClassName("case")[ran].innerText=P2.signe
        
        document.getElementsByClassName("case")[ran].disabled="true"
        
        jeu=collecter();  
        
        for( ipartie; n< jeu.length; n++) {
          
          ensemble[ipartie] = jeu[n]
        ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble
        
        }
        n=0;
        
        
        console.log(ipartie)
        
        console.log(jeu)
        
        console.log(ensemble)
        
        
        if(count<9){
        document.getElementById("tdj").innerText="L'ordinateur a jouer.C'est votre tour"
        }
      
    /*}*/

    }
  }

  win()
  
  }//  fin if ordi =true
  
  
  
  /**Fin partie de l'ordinateur */
  
  
  /*Sauvegarde de jeu*/
  
  

    } // Fin de jouer
  
  
  
  /***Fin */
  
  
  
var reset=document.getElementById("reset")    
  
  
  
  reset.addEventListener("click", Inijeu)

  function Inijeu()
  
  {
  count=0;
  j=0;
  k=0
gagner=false;

  for (const bt of btn) {
  
  bt.innerText=""// Les cases sont vides
  bt.disabled=false// Les case sont clickable
  
  } 

  ipartie=0
  n=0
ensemble=[]

ensemble[90]

var jeu, n=0
  
jeu=collecter()

//Comptage et sauvegarde

for( ipartie; n< jeu.length; n++) {
  
  ensemble[ipartie] = jeu[n]
ipartie=ipartie+1//sert d''index pour l'enregistrement du jeu dans le tableau ensemble

}

n=0;
 
  }



  
  
  
  
  
  