var P1=new Object()
var P2=new Object()


P1.affichage=""
  P2.affichage=""

  P1.signe=""
  P2.signe=""

var ordre;
var ran
  
  
var ordi=document.getElementById("ordi")



  
var Ordi=true// booleeen true car on joue contre l'ordi


var x=document.getElementById("x")



ordi.addEventListener("click", () =>{

  Ordi=true;
}
)

  
  function rang () {

    var dialogue =document.getElementById("rang") 

dialogue.open=true



 /*// dialogue.open=true;
  
  
  var para = document.createElement("p")
  
  para.innerText="Voulez-vous etre 1er ou 2eme ?"
  
  
  var  form=document.createElement("form")
  
  form.method="dialog"
  
  var b1er =document.createElement("button")
  b1er.innerText="1er"
  
  var b2eme =document.createElement("button")
  b1er.innerText="2eme"
  
  
  dialogue.appendChild(para)
  
  form.appendChild(b1er)
  
  form.appendChild(b2eme)
  
  
  dialogue.appendChild(form)

  */

//  dialogue.show()

  }
  
function Or1() {  P1.signe="X", P2.signe="O"; // L'ordi joue en premier"
ordre=1
Ordi=true





/*
  function Or2() { P1.signe="X", P2.signe="O"                             // L'ordi joue en premier"
  or=2



  console.log("Bingo")


  count++;

  
jeu=collecter(); 

do{ ran=Math.floor(Math.random()*9)

}while( document.getElementsByClassName("case")[ran].innerText!=="" )



jeu=collecter();    


document.getElementsByClassName("case")[ran].innerText="X"

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


if( count===9){

   document.getElementById("tdj").innerText="Jeu fini"
   
 }


for (const bt of btn) {

   bt.addEventListener("click", jouer)

 }


}

*/


  //ordi.addEventListener("click", () =>{ J2=true })
  //j2.addEventListener("click", () =>{ Ordi=true})
  
  
  
  //Determiner si le premier joueur utilise X ou Y
  
  
  
  
  //Si on joue contre l'ordi




  rang()  
  
   P1.signe="X", P2.signe="O" ,
  P1.affichage="C'est votre tour" 
  

  
  /*
  if(Ordi===false)
  {
  
  
  x.addEventListener("click", () =>{ P1.signe="X", P2.signe="O" ,
  P1.affichage="Tour du 1er joueur", P2.affichage="Tour du 2eme joueur"})
  
  y.addEventListener("click", () =>{ P1.signe="O", P2.signe="X",
  
  P1.affichage="Tour du 1er joueur", P2.affichage="Tour du 2eme joueur"
  
  })
  
  }
  //Si on joue contre l'ordi
  if(Ordi===true)
  {
  
  
  x.addEventListener("click", () =>{ P1.signe="X", P2.signe="O" ,
  P1.affichage="C'est votre tour" })
  
  y.addEventListener("click", () =>{ P1.signe="O", P2.signe="X",
  
  P1.affichage="C'est votre tour"
  
  })
  */
  /** */
  
  
  
  document.getElementById("tdj").innerText=P1.affichage
  
 
 

  
  
  /*  Fin */ 
  
  
  
  
  
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
  
  var count=0,l1=0, l11=0, l2=0, l22=0, l3=0, l33=0, co1=0, co11=0, co2=0, co22=0, co3=0, co33=0, dia1=0, dia11=0, dia2=0, dia22=0
  var  j=0
  
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
    
     







/*       
        console.log("L'ordi joue en premier")

if(  count<=9 ) // Si le compte est impaire l'ordi joue
{

    console.log("L'ordi joue en premier")

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


   /* }*

    

}
*/


  
  
  /**Fin comptage */


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


 // Si c'est 0 il joue et ca devient 1 et l'ordi ne joue pas
        // Si c'est 1 il ne joue pas, l'ordi joue
        // Si c'est 2 il joue et l'ordi ne joue pas
        // Si c'est 3 in ne joue pas et l'ordi joue

        // Si c'est 8 il joue et count est 9 c'est fini
        //Comme count
    
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



    /**L'ordinateur joue */
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

// Faire une partie ordi qui ne depend pas d'un event listener

// Mettre un second event listener dans la partie ordi 
// pour que le secong joueur puisse jouer une fois que
//l'ordi a jouer  

/*
if(ordre===2) // L'ordi joue en premier
{


    if(  count<=9 ) // Si le compte est impaire l'ordi joue
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
    }



//Le joueur joue


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



}
*/

  
  
  }//  fin if ordi =true
  
  
  
  /**Fin partie de l'ordinateur */
  
  
  /*Sauvegarde de jeu*/
  
  

    } // Fin de jouer
  
  
  
  /***Fin */
  
  
  /**Parite de retour en arriere */
  
  var arriere=document.getElementById("arriere")
var reset=document.getElementById("reset")    
  
  
  arriere.addEventListener("click", Arrier)
  
  reset.addEventListener("click", Inijeu)

  function Inijeu()
  
  {
  count=0;
  j=0;
  k=0

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


  //Fonction de retour en arriere
  function Arrier() {
  
    console.log("C'est bon")
    var source = [];
  
  
  if(count>0)
  {
    k=count
 /*
    if(Ordi===false)//Si on joue contre le second joueur

  {

    count--;

    j=(k*9)-9;

  }
  */
  //revenir en arriere dans le comptage
  

  if(Ordi===true)// Si on joue contre l'ordinateur

  {

        
 /*       
        if(count===9)
{       
        count--;
    


        j=(k*9)-9;
    
    }



else {
       
            count=count-2;
        
    
    
            j=(k*9)-18;
        
        


    }
    */




    if(count<=9)
    {       
            count--;
        
    
    
            j=(k*9)-9;
        
        }
    


    

/*
    if( (ordre===1) && (count<9 ) ){
        count=count-2;
    
        j=(k*9)-18;
    
    }

*/

  /*  
    if(ordre===2){
    count=count-2;

    j=(k*9)-18;

}

  }
*/
  //Je creer la variable j qui permet d'indexer la sauvegarde
  
    
  
    var btns = document.getElementsByClassName("case");
  
    for (let a = 0; a <9; a++) {
      btns[a].innerText=ensemble[j]
  
      if(btns[a].innerText==="")
      {
  btns[a].disabled=false
  
      }
      
      console.log("button nun "+a +" text "+btns[a].innerText+" ensemble :"+ensemble[j]+" index de la sauvegarde "+j)
  
  j++;
  
     }

    /* 
     if(Ordi===false)// Si on joue contre le second joueur

     {
   
        ipartie=ipartie-9;  //ipartie la variable inpliquees dans l'action de jouer 

        
        // qui permet de faire reculer le jeu puisque

        tp=P1 
        P1=P2
        P2=tp  // pour faire joueur le second joueur

     }
     
  */
        
  /*
    if(Ordi===true)// Si on joue contre l'ordinateur

    {

 
        ipartie=ipartie-18;  //ipartie la variable inpliquees dans l'action de jouer 



      }
    
      */

/*
      if( (ordre===1) && (count===9 ) ){
     ipartie=ipartie-9
    }
*/

/*

    if( (ordre===1)  ){ // Lorsque le seul joueur joue en dernier
        
        
        if(count===9)
{       
ipartie=ipartie-9
    
    }




    if(count<=8)
    {       
 ipartie=ipartie-18       
        }


    }*/


 /*   if( (ordre===1)  ){ // Lorsque le seul joueur joue en premmier
*/
        


        if(count<=9)
{       
    ipartie=ipartie-9    


        j=(k*9)-9;
    
    }


        /*
        if(count===9)
{       
    ipartie=ipartie-9    


        j=(k*9)-9;
    
    }



else {
       
            count=count-2;
        
    
    
            ipartie=ipartie-18       
        
        


    }*/
    
//}


} // IF ORDI = TRUE

/*
    
    if( (ordre===1) && (count<9 ) ){
        ipartie=ipartie-18
       }
  */ 
      

  
   document.getElementById("tdj").innerHTML=P1.affichage
   
  
     //console.log("ipartie "+ipartie)
  
  /*
  for ( var i =9; i> 0; i--) {
  ca[i]=ensemble[(j)]
  
  j--;
  
  }
  
  console.log(ca)
  */
  
  }// if COUNT > 0
  
  }// FIN ARRIER
  
  
  
  
  
  
  
}
  
  
  
  /*
  for (let a = 0; a < btn.length; a++) {
    source[a] = btn[a].getAttribute("src");
    console.log(source[a]);
  
    if (source[a] === "case.png") {
      btn[a].addEventListener("click", jouer);
      console.log(source);
    }
  }
  
  var source2 = [];
  
  for (let a = 0; a < btn.length; a++) {
    source2[a] = btn[a].getAttribute("src");
    console.log(source2[a]);
  
    if (source2[a] !== "case.png") {
      btn[a].removeEventListener("click", jouer);
      console.log(source2);
    }
  }
  
  
  
  function jouer(){
    this.setAttribute("src","x.png")
  
  
    var ran
  
    var count=0
    var l1=0
    var l2=0
    var l3=0
    var co1=0
    var co2=0
    var co3=0
    var dia1=0
    var dia2=0
    
    var ordi=0
    
  
  
  do{
  ran = Math.floor(Math.random() * 9);
  
  //alert(ran)
  
  var source=btn[ran].getAttribute("src")
  
  //alert(source)
  
  for(var j=0;j<btn.length;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="case.png")//la case est vide
  count=count+1
  
  }
  
  
  
  
  
  }
  while(source!=="case.png"&& count!==0 )
  
  if(count!==0){
  btn[ran].setAttribute("src","o.png")
  }
  
  
  //verif les lignes l1; l2; l3
  
  for(var j=0;j<3;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="x.png")
  {
  l1=l1+1
  }
  alert(l1)
  }
  
  
  
  for(var j=3;j<6;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="x.png")//la case est vide
  {l2=l2+1}
  
  }
  
  for(var j=6;j<9;j++)
  {
  
  var vf=btn[j].getAttribute("src")//verifie si
  
  if(vf==="x.png")//la case est vide
  {l3=l3+1}
  
  }
  
  if(l1===3||l2===3||l3===3)
  {
  this.removeEventListener("click", jouer)
  
  alert("Vous avez gagné")
  
  
  }
  
  
  
  }
  
  */
  
  
  
  
  /*var btn= document.getElementsByTagName("img")
  let fin=0;
  
  var source =[];
  
  for(let a=0;a<btn.length;a++){
    source[a]=btn[a].getAttribute("src");
  
  console.log(source[a])
  
  }
  
  
  for(let a=0;a<btn.length;a++){
  if(source[a]==="case.png")
  
  {  btn[a].addEventListener("click",  jouer )
  
  console.log(source)
  
  }
  
  
  
  var source2 =[];
  
  
  for(let a=0;a<btn.length;a++){
    source2[a]=btn[a].getAttribute("src");
  
  console.log(source2[a])
  
  }
  
  
  if(source2[a]!=="case.png")
  
  {  btn[a].removeEventListener("click",  jouer )
  console.log(source2)
  
  }
  */
  
  
  
  /*
  
  for(var i=0;i<btn.length;i++){
      caseActu=btn[i]
  
      if(source[i]==="case.png"){
  
      caseActu.removeEventListener("click",  jouer )
  }
  
  }
   */
  
      
  
  
  /*
  var btn = document.getElementsByTagName("img");
  
  for (var i = 0; i < btn.length; i++) {
    var caseActu = btn[i];
    caseActu.addEventListener("click", jouer);
  }
  
  function jouer() {
    this.setAttribute("src", "x.png");
  
    var ran;
    var count = 0;
    var l1 = 0;
    var l2 = 0;
    var l3 = 0;
    var co1 = 0;
    var co2 = 0;
    var co3 = 0;
    var dia1 = 0;
    var dia2 = 0;
    var ordi = 0;
  
    do {
      ran = Math.floor(Math.random() * 9);
  
      var source = btn[ran].getAttribute("src");
  
      for (var j = 0; j < btn.length; j++) {
        var vf = btn[j].getAttribute("src");
        if (vf === "case.png") {
          count = count + 1;
        }
      }
    } while (source !== "case.png" || count !== 0);
  */
    /*btn[ran].setAttribute("src", "o.PNG");
  
    // Verification of lines l1, l2, l3
    for (var j = 0; j < 3; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l1 = l1 + 1
  
  console.log(l1)
  
      }
    }
  
    for (var j = 3; j < 6; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l2 = l2 + 1;
      }
    }
  
    for (var j = 6; j < 9; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l3 = l3 + 1;
      }
    }
  
    if (l1 === 3 || l2 === 3 || l3 === 3) {
      this.removeEventListener("click", jouer);
    }*/
  
  
  
  
  /*
  
  var btn = document.getElementsByTagName("img");
  
  for (var i = 0; i < btn.length; i++) {
    var caseActu = btn[i];
    caseActu.addEventListener("click", function jouer() {
    this.setAttribute("src", "x.png");
  
    var ran;
    var count = 0;
    var l1 = 0;
    var l2 = 0;
    var l3 = 0;
    var co1 = 0;
    var co2 = 0;
    var co3 = 0;
    var dia1 = 0;
    var dia2 = 0;
    var ordi = 0;
  
    do {
      ran = Math.floor(Math.random() * 9);
  
      var source = btn[ran].getAttribute("src");
  
      for (var j = 0; j < btn.length; j++) {
        var vf = btn[j].getAttribute("src");
        if (vf === "case.PNG") {
          count = count + 1;
        }
      }
    } while (source !== "case.PNG" || count !== 0);
  
    btn[ran].setAttribute("src", "o.PNG");
  
    // Verification of lines l1, l2, l3
    for (var j = 0; j < 3; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l1 = l1 + 1;
        console.log(l1);
      }
    }
  
    for (var j = 3; j < 6; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l2 = l2 + 1;
      }
    }
  
    for (var j = 6; j < 9; j++) {
      var vf = btn[j].getAttribute("src");
      if (vf === "x.PNG") {
        l3 = l3 + 1;
      }
    }
  
    if (l1 === 3 || l2 === 3 || l3 === 3) {
      this.removeEventListener("click", jouer);
    }
  }
  )
  
  }
  
  */



  